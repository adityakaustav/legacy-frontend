import React from 'react'
import Soa from "../Images/soa.jpg";
import './LoginPage.css';
import Login from "../Component/Login";
import LoginGoogle from '../Component/LoginGoogle';
const LoginPage = () => {
    return (
        <>
         <div className="Login-div">
      <Login />
        <LoginGoogle />
       </div>
        </>
    )
}

export default LoginPage
