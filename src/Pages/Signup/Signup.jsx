import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify'
import http from "../api/http";

const Signup = () => {

	const generateError = (err) => {toast.error(err, {
		position: toast.POSITION.TOP_RIGHT
	})};
    const [userName, setUserName] = useState('')
    const [fullname, setfullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passErr, setPassErr] = useState('')
	const [error, setError] = useState("");

	const navigate = useNavigate();

useEffect(()=>{
	
},[])
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newSign ={
            email: email,
            password: password,
            username: userName,
			fullname: fullname
        }
        try {
            const {data} = await http.post("/signup",newSign)
            console.log(data);
            if (data.errors) {
                setEmailErr(data.errors.email)
                setPassErr(data.errors.password)
				if (emailErr) generateError(emailErr)
				else if (passErr) generateError(passErr)
            }else{
				console.log('Posted');
                // window.location = "/"
                localStorage.setItem("jwt", data)
            }
        } catch (error) {
			return console.log(error);
        }
		
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<ToastContainer />
						<h1>Create Account</h1>
						
						<input
							type="text"
							placeholder="fulname"
							name="fullname"
							onChange={e => setfullname(e.target.value)}
							value={fullname}
							required
							className={styles.input}
						/>

						<input
							type="text"
							placeholder="UserName"
							name="userName"
							onChange={e => setUserName(e.target.value)}
							value={userName}
							required
							className={styles.input}
						/>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={e => setEmail(e.target.value)}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={e => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
