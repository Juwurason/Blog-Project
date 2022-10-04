import Navbar from "./Navbar";
import Footer from "./Footer";
import jwtDecode from "jwt-decode"
import Navba from "./Nav/Navba";
import { useState } from "react";
import setAuthToken from "../Pages/Util/setAuthToken";

let logUser

if (localStorage.jwt) {
    const jwt = localStorage.getItem("jwt")
    setAuthToken(jwt)
   logUser = jwtDecode(jwt)
}

function DefaultLayout({ children }) {
    const [user, setUser] = useState(logUser)
    return (
        <>
            <div style={{position:"sticky", top:"0", zIndex:'1'}}>
                {/* <Navbar /> */}
                <Navba user={user} />
            </div>

            <div>
                {children}
            </div>

            <div>
               
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default DefaultLayout;