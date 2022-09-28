import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './Pages/App'
import Login from "./Pages/Login/Login"
import Notfound from './Pages/Notfound'
import Signup from './Pages/Signup/Signup'
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
   <RouterProvider router={router} />
  </React.StrictMode>
)
