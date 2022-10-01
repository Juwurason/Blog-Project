import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify'
import http from "../api/http";
import "./Signup.css"
import { useAuth } from "../context/Theme";
import Button from "../../Component/Button";
import la from "../../assets/la.jpg"
import Aos from "aos";

const Signup = () => {

	const {theme,user} = useAuth()

	useEffect(()=>{
		Aos.init()

		if (user) {
			navigate(-1)
		}
	},[])

	const generateError = (err) => {toast.error(err, {
		position: toast.POSITION.TOP_RIGHT
	})};
	const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState('')
    const [fullname, setfullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
			setLoading(true)
            const {data} = await http.post("/signup",newSign)
            console.log(data);
            if (data.errors) {
              const {email, password} = data.errors
				if (email) generateError(email)
				else if (password) generateError(password)
            }else{
				console.log('Posted');
                window.location = "/"
                localStorage.setItem("jwt", data)
            }
        } catch (error) {
			return console.log(error);
        }
		finally{
			setLoading(false)
		  }
		
	};

	return (
		<div className={styles.signup_container} id={theme} 
		data-aos="flip-up"
		data-aos-easing="linear"
		data-aos-duration="1600"
		>
			<Button />
			<div className={styles.signup_form_container} id={theme}>
				<div className={styles.left} style={{backgroundImage:` url(${la})`}}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right} id={theme}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
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
						<button type="submit" className={styles.green_btn}>
						<span hidden={!loading} className="spinner-border spinner-border-sm"></span>
							Sign Up
						</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Signup;
