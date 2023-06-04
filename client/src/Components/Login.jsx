import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles2.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            const url = "http://localhost:5001/api/users/login";
			const { data: res } = await axios.post(url, data);
            const token = res.data;


            // Make another API request to retrieve the user's data
            const userDataUrl = "http://localhost:5001/api/users/me";
            // const config = {
            // headers: {
            //     Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            // },
            // };
            // const { data: userData } = await axios.get(userDataUrl, config);

            // // Access the user's data
            // console.log(userData);

            // Retrieve the role from the response data
            // const role = res.data;
            // console.log("hi");
            // console.log("role is:", role);
            // // Determine the redirect path based on the user's role
            // let redirectPath = "/";
            // if (role === "admin") {
            //     console.log("admin!");
            //     redirectPath = "/admin";
            // } else if (role === "user") {
            //     redirectPath = "/";
            // }
			localStorage.setItem("token", res.data);
			window.location = '/';
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

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;