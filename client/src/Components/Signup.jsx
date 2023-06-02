import React, { useState } from "react";
import "./Signup.css";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
     
     <div className="Form-container">
        <h1 className="Signup"> Sign-up </h1>
        <form className="Signup-form" onSubmit={handleSubmit}>
           
            <input type={name} placeholder="Enter first name" id="name" name="name"required/>

            <input type={name} placeholder="Enter last name" id="name" name="name"required/>

            <input  type="tel" placeholder="Enter phone number" id="number" name="number"required/>

           <input value ={email} type="email" placeholder="Enter email" id="email" name="email"required/>
          
           <input value ={pass} type="password" placeholder="Enter password" id="pasaword" name="password"required/>
          
           <input value ={pass} type="password" placeholder="Confirm password" id="pasaword" name="password"required/>
      
           <button type="submit"> Signup </button>
        </form>

       
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}> Already have an account? <b> Login here. </b> </button>

     </div>
    )
}