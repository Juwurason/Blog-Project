import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'
import App from './Pages/App'
import Login from "./Pages/Login/Login"
import Notfound from './Pages/Notfound'
import Signup from './Pages/Signup/Signup'
import 'react-toastify/dist/ReactToastify.css'
import Theme from './Pages/context/Theme'
import 'aos/dist/aos.css'
import PrivateRoutes from './Pages/Private/PrivateRoutes'
import Index from './Pages/Index'
import Content from './Pages/Content'
import Newblog from './Pages/Newblog'
// import "./Pages/styles.css"
const router = createBrowserRouter(
 [
  {path: '/', element: <Index />, errorElement: <Notfound /> },
  {path: '/login', element: <Login /> },
  {path: '/signup', element: <Signup /> },
  {path: '/app', element: <App /> },
  {path: '/newblog', element: <Newblog /> },
  // {path: '/content/:sid', element: <Content /> },
 {
  element: <PrivateRoutes />, path:'/content/:sid', PrivateRoutes: <Content /> 
 }
  //   <Route element={<PrivateRoutes />}>
  // <Route element={<Content />} path='content/:sid' />
  // </Route>
 
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Theme>
   <RouterProvider router={router} />
   </Theme>
  </React.StrictMode>
)
