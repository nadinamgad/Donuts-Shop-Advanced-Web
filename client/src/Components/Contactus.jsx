import React from "react";
import "../Style/ContactUs.css";
import {Footer } from "../Components/Footer";

export default function Contactus() {
  return (
    <div className="Container">
      <h1 className="contactTitle"> Feel free to contact us.</h1>

      <div className="form-container">
        <form>
          <div className="Name">
            <label htmlFor="firstname"> First Name </label>
            <input
              type="text"
              name="firstName"
              className="firstName"
              placeholder="enter first name"
              tabIndex="1"
            />

            <label htmlFor="lastname"> Last Name </label>
            <input
              type="text"
              name="lastName"
              className="lastName"
              placeholder="enter last name"
              tabIndex="2"
            />

            <label htmlFor="email"> Email </label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="example@corp.com"
              tabIndex="3"
            />

            <label htmlFor="message"> Message </label>
            <textarea
              placeholder="Start typing..."
              className="message"
              name="message"
            />

            <button type="submit" className="send">
              {" "}
              Send{" "}
            </button>
          </div>

          <div className="links">
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </form>
      </div>

      
       
      
    </div>
  );
}
