import React from "react";
import { useState, useRef, useEffect } from "react";
import DefaultLayout from "../Component/DefaultLayout";
import { Link, Outlet, useParams } from "react-router-dom";
import image from "../assets/blogbg.jpg"
import axios from "axios";
import { useAuth } from "./context/Theme";



function Content() {

    const {theme} = useAuth()
    
    const {sid} = useParams()
    const [datai, setDatai] = useState([])
    const [imag, setImag] = useState()


    useEffect(() => {
        const getData = async () => {
           try {
            const url = `https://blogimy.onrender.com/${sid}`
            const res = await axios.get(url)
             setDatai(res.data)
             setImag(res.data.img.data.data)
            console.log(res.data);
           } catch (error) {
            console.log(error);
           } 
        }
            getData()
    }, [])

     
        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(imag))
        )
   
return(
    <>
   
        <DefaultLayout>
            <main  id={theme}>
            <Outlet />
                {/* Styled in CSS file  */}
                <div className="topContent"> 
                    <div id="titleTopContent" className="d-flex flex-wrap">
                        <div id="titleContent" className="w-50">
                           <img src={`data:image/png;base64, ${base64String}`} style={{width: '100%', height: '50vh'}} />
                        </div>
                        <div id="titleContent" className="w-50 text-wrap text-center row align-items-center">
                            <h1 className="fw-bold p-3">
                                {datai.tittle}
                            </h1>
                        </div>
                    </div>

                    <div className="pt-2 ps-2 pe-2">
                        {/* Background styled in css file  */}
                        <p className="p-2 rounded" id="textContent" style={{boxShadow: "0px 0px 5px black"}}>
                            {datai.body}
                        </p>
                    </div>
                    
                    <div className="ps-2 pe-2 pb-1">
                        <div id="commentSection" className="ps-2 pe-2 pb-4 rounded" style={{boxShadow: "0px 0px 5px black"}}>
                            <h1>Comments</h1>
                            <div className="w-75 p-2 mb-2 border rounded" id="comment" style={{boxShadow: "2px 2px 5px black"}}>
                                <h5 className="fw-bold">Name of the User</h5>
                                <p>The comment that was left by the user</p>
                            </div>
                            <div className="w-75 p-2 mb-2 border rounded" id="comment" style={{boxShadow: "2px 2px 5px black"}}>
                                <h5 className="fw-bold">Name of the User</h5>
                                <p>The comment that was left by the user</p>
                            </div>
                            <div className="w-75 p-2 mb-2 border rounded" id="comment" style={{boxShadow: "2px 2px 5px black"}}>
                                <h5 className="fw-bold">Name of the User</h5>
                                <p>The comment that was left by the user</p>
                            </div>

                            <div id="leaveComment">
                                <h2>
                                    Add your comment
                                </h2>
                                <textarea name="" id="" className="w-75" style={{height: "10rem"}}></textarea> <br />
                                <button className={theme}>
                                    Submit Comment
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </main>
        </DefaultLayout>
    </>
)
}

export default Content;