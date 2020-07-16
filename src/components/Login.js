import React from 'react'
import { Redirect } from "react-router";

import styles from './Login.module.css';

const Login = ({email, password, setEmail, setPassword}) => {

    const onSubmit = e =>{
        e.preventDefault();
        if(password.toLowerCase() === password){
            alert("Password should contain at least one uppercase letter");
            return;
        }
        if(email === "Clarion@clarion.com" && password === "Clarion123")
            return <Redirect to={{pathname:'/dashboard'}}/>;
        else
            alert("Invalid Credentials")
    }

    return (
        <div className={styles.container}>
        <h1 className={styles.header}>Login</h1>
        <form onSubmit={onSubmit} className={styles.form}>
            <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
        </div>
    )
}

export default Login
