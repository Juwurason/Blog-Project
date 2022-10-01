import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './Pages/App'
import Login from "./Pages/Login/Login"
import Notfound from './Pages/Notfound'
import Signup from './Pages/Signup/Signup'
import 'react-toastify/dist/ReactToastify.css'
import Theme from './Pages/context/Theme'
// import "./Pages/styles.css"
const router = createBrowserRouter(
 [
  {path: '/', element: <App />, errorElement: <Notfound /> },
  {path: '/login', element: <Login /> },
  {path: '/signup', element: <Signup /> },
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Theme>
   <RouterProvider router={router} />
   </Theme>
  </React.StrictMode>
)
