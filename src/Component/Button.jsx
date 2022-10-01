import { useAuth } from "../Pages/context/Theme"

const Button = () =>{
    const {changeTheme} = useAuth()
    return(
        <>
        <button onClick={changeTheme}>change</button>
        </>
    )
}

export default Button