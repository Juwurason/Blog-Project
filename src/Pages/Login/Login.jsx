import { useState, useEffect } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import {ToastContainer, toast} from 'react-toastify'
import http from "../api/http";
import Theme, { useAuth } from "../context/Theme";
import "./Login.css"
import imag from "../../assets/imag.jpg"
import Aos from "aos";

const Login = () => {
   
	const {theme, user} = useAuth()
	let navigate = useNavigate()
	useEffect(()=>{	
		if (user) {
			navigate(-1)
		}
		Aos.init()
	},[])

	const generateError = (err) => {toast.error(err, {
		position: toast.POSITION.TOP_LEFT
	})};
	
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newLogin ={
            email: email,
            password: password,
        }
        try {
			setLoading(true)
            const {data} = await http.post('/login',newLogin)
            console.log(data);
            if (data.errors) {
               const {email, password} = data.errors
			   if (email) generateError(email)
			   else if (password) generateError(password)
            }else{
               window.location = "/"
			console.log("successful log"); 
                localStorage.setItem("jwt", data)
            }
        } catch (error) {
			return  console.log(error);
        }
		finally{
			setLoading(false)
		  }
	};

	return (
		<div className={styles.login_container} id={theme} 
		data-aos="fade-down"
		data-aos-easing="linear"
		data-aos-duration="1600"
		>
			<div className={styles.login_form_container} id={theme}>
				<div className={styles.left} id={theme}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={f => setEmail(f.target.value)}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={f => setPassword(f.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						<button type="submit" className={styles.green_btn}>
						<span hidden={!loading} className="spinner-border spinner-border-sm"></span>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right} style={{backgroundImage:` url(${imag})`}}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
