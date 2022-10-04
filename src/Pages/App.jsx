import jwtDecode from "jwt-decode"
import { useState,useEffect } from "react"
import Navba from "../Component/Nav/Navba"
import setAuthToken from "./Util/setAuthToken"
import axios from "axios"
import http from "./api/http"

export default function App(){
  const [user, setUser] = useState([])

  useEffect(() => {
    const getData = async () => {
       try {
        
        const res = await http.get("/")
         setUser(res.data)
        console.log(res.data);
       } catch (error) {
        console.log(error);
       } 
    }
        getData()
}, [])

  return(
    <main>
     {
                    user.map((news, index) =>{
                        const {_id,img} = news                  
                // const base64String = btoa(
                //     String.fromCharCode(...new Uint8Array(img.data.data))
                // )
                        return(
                            <div key={_id} className="card m-2" id="card" style={{width:'19rem'}}>
                                {/* <img src={`data:image/png;base64,${base64String}`} style={{width: '19rem', height: '11rem'}} className="card-img-top" /> */}
                                <div className="card-body">
                                    <p className="card-text">{news.tittle}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className="fw-bold text-success">Comments <i className="bi bi-chat-fill"></i>: 11</p>
                                        <p className="fw-bold text-secondary">Likes<i className="bi bi-hand-thumbs-up-fill"></i>: 10</p>
                                        <span className="card-text">{news.author}</span>
                                    </div>
                                    {/* <Link to={`/Content/${news._id}`}  className="btn btn-primary">Read More...</Link> */}
                                </div>
                            </div>
                        )
                    })}
    </main>
  )
}