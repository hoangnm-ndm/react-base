import React, { useState } from "react";
import axios from "axios";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const register = async () => {
		try {
			await axios.post("http://localhost:3000/register", { email, password });
			alert("Registration successful");
		} catch (error) {
			alert("Registration failed");
		}
	};

	return (
		<div>
			<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
			<button onClick={register}>Register</button>
		</div>
	);
};

export default Register;
