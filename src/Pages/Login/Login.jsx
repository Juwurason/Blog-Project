import { useState, useEffect } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import {ToastContainer, toast} from 'react-toastify'
import axios from "axios";
import http from "../api/http";
const Login = () => {

	const generateError = (err) => {toast.error(err, {
		position: toast.POSITION.TOP_LEFT
	})};
	let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passErr, setPassErr] = useState('')

	const auth = () =>{
        const jwt = localStorage.getItem("jwt")
        if (jwt) {
            return true
        }else{
            return false
        }
    }
    const user = auth()
    
        useEffect(()=>{
            if (user) {
                // navigate(-1)
            }
        },[emailErr, passErr])

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newLogin ={
            email: email,
            password: password,
        }
        try {
            const {data} = await http.post('/login',newLogin)
            console.log(data);
            if (data.errors) {
                setEmailErr(data.errors.email)
                setPassErr(data.errors.password)
			 if (emailErr) generateError(emailErr)
			  else	if (passErr) generateError(passErr)
            }else{
            //    window.location = "/"

			console.log("successful log"); 
                localStorage.setItem("jwt", data)
            }
        } catch (error) {
			return  console.log(error);
        }
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<ToastContainer />
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
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
