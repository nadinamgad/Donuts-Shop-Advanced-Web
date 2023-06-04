import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    
    try {
      const url = "http://localhost:5001/api/users/register";
      const { data: res } = await axios.post(url, data);
      navigate("/aboutus");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(data);
  
  //   try {
  //     const url = "http://localhost:5001/api/users/register";
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const res = await response.json();
  //     navigate("/login");
  //     console.log("res message: ", res.message);
  //   } catch (error) {
  //     // Handle error
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
  //   }
  // };
  

  return (
    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>

            <input
							type="text"
							placeholder="PHONE nubmer"
							name="phoneNumber"
							onChange={handleChange}
							value={data.phoneNumber}
							required
							className={styles.input}
						/>

            {/* <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="EG"
              value={data.phoneNumber}
              onChange={handleChange}
              className={styles.input}/> */}
  
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
  );
};

export default Signup;
