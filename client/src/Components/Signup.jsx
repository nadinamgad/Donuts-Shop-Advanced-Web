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
        <h2> Sign-up </h2>
        <form className="Signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name"> First name </label>
            <input type={name} placeholder="Enter first name" id="name" name="name"/>

            <label htmlFor="name"> Last name </label>
            <input type={name} placeholder="Enter last name" id="name" name="name"/>

            <label htmlFor="number"> Phone number </label>
            <input  type="tel" placeholder="Enter phone number" id="number" name="number"/>

           <label htmlFor="email"> E-mail </label>
           <input value ={email} type="email" placeholder="Enter email" id="email" name="email"/>
      
           <label htmlFor="password"> Password </label>
           <input value ={pass} type="password" placeholder="Enter password" id="pasaword" name="password"/>

           <label htmlFor="password">  Confirm Password </label>
           <input value ={pass} type="password" placeholder="Confirm password" id="pasaword" name="password"/>
      
           <button type="submit"> Signup </button>
        </form>

       
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? <b> Login here. </b> </button>

     </div>
    )
}