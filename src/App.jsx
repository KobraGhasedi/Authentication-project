import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import MainHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
import './App.css'
import { GetAllUsers } from './assets/database/Users';

function App() {
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token=localStorage.getItem('token')
     
    useEffect(() => {
     setUsers(GetAllUsers());
     if(token==='ok'){
      setIsLoggedIn(true)
     }
       
    }, [])
    
    const loginHandler = (email, password) => {
    const item= users.filter((item)=>{
        if(item.username===email && item.password===password){
        localStorage.setItem('token','ok')
        setIsLoggedIn(true)
        return item

      }
    })
      if(item.length===0){
       alert('نام کاربری و رمز عبور اشتباه است!')
     }
  
  }
   const logoutHandler = () => {
    setIsLoggedIn(false);
  };  
  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <WelcomePage onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App
