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
            <h1 className="Login"> Login </h1>
           
            <input value ={email} type="email" placeholder="Email" id="email" name="email" required/>
       
            <input value ={pass} type="password" placeholder="Password" id="pasaword" name="password" required/>
       
            <button type="submit"> Login </button>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('Signup')}> Don't have an account? <b> Sign-up here. </b></button>
         </form>

         
        </div>
        
    )
}