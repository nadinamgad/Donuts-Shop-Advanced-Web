import React, { useState } from "react";
import "./Login.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
  
        <div className="Form-conatiner">
            
            <form className="Login-form" onSubmit={handleSubmit}>
            <h2> Login </h2>
            <label htmlFor="email"> E-mail </label>
            <input value ={email} type="email" placeholder="Enter email" id="email" name="email" required/>
       
            <label htmlFor="password"> Password </label>
            <input value ={pass} type="password" placeholder="Enter password" id="pasaword" name="password" required/>
       
            <button type="submit"> Login </button>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have an account? <b> Sign-up here. </b></button>
         </form>

         
        </div>
        
    )
}