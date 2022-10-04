import './Navbar.css';
import { Link } from "react-router-dom";
import { useAuth } from '../../Pages/context/Theme';
import ReactSwitch from 'react-switch';
import {XyzTransition} from "@animxyz/react"
const Navba = ({user}) => {

  const {theme, changeTheme} = useAuth()
    const logout = ()=>{
        localStorage.removeItem("jwt")
        window.location = "/"
      }
  //  console.log(user);
    return ( 
        <nav 
        className={theme}
        >
            <ul id='ul'>
                <li>
                    Blogim!
                </li>
              <li>
                <a href="#card" style={{color:"#227983", textDecoration:"none"}}>Trending</a>
              </li>
            
            </ul>
            <ul id='uls'>
                <li id='fir'>
                <Link id='fir' to={'/'}>Home</Link>
                </li>
                {!user && (
                    <>
                    <li id='sec'>
                    <Link id='fir' to={'/login'}>Login</Link>
                    </li>
                    <li id='sec'>
                    <Link id='fir' to={'/signup'}>Sign up</Link>
                    </li>
                    </>)
                }
                {user && (
                    <>
                    <li id='fir'>
                <Link id='fir' to={'/newblog'}> New Blog</Link>
                </li>
                    {/* <li> */}
                    <button className="btn p-0 ms-2 me-2 mt-0 mb-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
       {user.email}
       </h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <button onClick={logout}>Logout</button>
  </div>
</div>
                    {/* <Link id='fir' to={'profile'}>Profile</Link> */}
                    {/* </li> */}
                    {/* <li id='sec'>
                    <Link id='fir' to={'/logout'}>Log out</Link>
                    </li> */}
                    </>)
                }
                <ReactSwitch onChange={changeTheme}
                 checked={theme === "dark"} 
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </ul>
        </nav>
     );
}
 
export default Navba;