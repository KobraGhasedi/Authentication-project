import React, { useEffect, useRef, useState} from 'react';
import styles from './Login.module.css';
import Button from './Button';

const Login = (props) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [buttonIsDisabled, setButtonIsDisabled] = useState(false)

useEffect(() => {
const timerId=setTimeout(()=>{
  console.log("use Effect Executeing...")
  if(username.length===0 || password.length===0){
    setButtonIsDisabled(true)
  }
 
},3000)
return ()=>{
  setButtonIsDisabled(false)
  clearTimeout(timerId);
}
}, [username,password])

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(username, password);

  };
  const usernameChangeHandler=(e)=>{
  setUsername(e.target.value)
  }
  const passwordChangeHandler=(e)=>{
   setPassword(e.target.value)
  }

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        
        <div  className={`${styles.dataContainer} `}  >
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
           value={username}
           onChange={usernameChangeHandler}
          />
        </div>

        <div
          className={`${styles.dataContainer} `} >
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>

        <div className={styles.submit}>
          <Button type="submit" isDisabled={buttonIsDisabled} >
            ورود
          </Button>
        </div>
        
      </form>
      </div>
  );
};

export default Login;
