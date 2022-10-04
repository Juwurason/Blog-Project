import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import DefaultLayout from "../Component/DefaultLayout";
import image from "../assets/blogbg.jpg"
import { Link } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from "react";
import Typed from 'typed.js'
import axios from "axios"
import Aos from "aos";
import Footer from "../Component/Footer";
import { useAuth } from "./context/Theme";
import styles from "../Pages/styles.module.css"
import "./cont.css"



function Index() {

    const {theme} = useAuth()

    const [data, setData] = useState([])
    const [category, setCategory] = useState()
    useEffect(() => {
        Aos.init()
        const getData = async () => {
            const url = 'https://blogimy.onrender.com'
            const res = await axios.get(url)
            setData(res.data)
            console.log(data); 
        }
        {data.length <1 ? getData() : (console.log("loading"));}
    }, [])

    const typer = useRef(null)

    useEffect(() => {
        const typed = new Typed(typer.current, {
        strings: ["Politics.", "Sports.", "Comedy.", "Music."],
        startDelay: 0,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "",
        smartBackspace: true
      });

      return () => {
        typed.destroy();
      }
    }, [])

    function getFilteredList() {
        if (!category) {
          return data;
        }
        return data.filter((item) => item.author === category);
      }
  
      const filteredList = useMemo(getFilteredList, [category, data]);
  
      function handleCategoryChange(event) {
        setCategory(event.target.value);
      }
    

    return (
        <>
            <DefaultLayout>
                <main id={theme}>
                    <div className={styles.main}>
                    <div id="intro" className="w-50 p-3 text-wrap row align-items-center" data-aos='zoom-out-up' data-aos-duration='2000'>
                        <Player src='https://lottie.host/26db524f-975d-4004-8add-176d678829b2/1eGDoghZU1.json'
                            className="lottiePlayer"
                            loop
                            autoplay
                            darkTheme={true}
                        />
                    </div>
                    <div className="w-50 p-3 text-wrap row align-items-center">
                        <div 
                            data-aos="zoom-in-down"
                            data-aos-duration='1500'>
                            <h1 className="fw-bolder">
                                Your favourite Blog with up-to-date news in areas such as <span 
                                className="text-white fst-italic" ref={typer}>
                                </span>
                            </h1>
                            <h6 className="fs-5">
                                We are the currently leading number 1 blog in the whole Nigeria and we bring you news as they are happening
                            </h6>
                        </div>
                    </div>
                    </div>

                </main>


                {/* News Section  */}
                <section  className={theme}>

                    <h1 className="p-3 fw-bolder">
                        Latest news
                    </h1>
                   <div style={{display:"flex", alignItems:"center"}}>
                   <h4 className="p-3 fw-bolder">
                        Filter by Category:
                    </h4>
                    <select style={{width:"90px", height:"35px"}} onChange={handleCategoryChange}>
                <option value="">All</option>
                  <option value="Sam">Sam</option>
                  <option value="Ben">Ben</option>
                  <option value="Was">Was</option>
                </select>
                   </div>
                    <div className="d-flex flex-wrap">
                        {/* data-aos="fade-right" 
                        data-aos-duration='500'
                        data-aos-once='true'
                        data-aos-delay='0'
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine" */}
                        {/* News Cards  */}
                    {
                    filteredList.map((news, index) =>{
                        const {_id,img} = news                  
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(img.data.data))
                )
                        return(
                            <div key={_id} className="card m-2" id="card" style={{width:'19rem'}}>
                                <img src={`data:image/png;base64,${base64String}`} style={{width: '19rem', height: '11rem'}} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{news.tittle}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className="fw-bold text-success">Comments <i className="bi bi-chat-fill"></i>: 11</p>
                                        <p className="fw-bold text-secondary">Likes<i className="bi bi-hand-thumbs-up-fill"></i>: 10</p>
                                        <span className="card-text">{news.author}</span>
                                    </div>
                                    <Link to={`/Content/${news._id}`}  className="btn btn-primary">Read More...</Link>
                                </div>
                            </div>
                        )
                    })}
                        
                        

                        {/* <div className="card m-2" id="card" style={{width:'19rem'}}>
                            <img src={image} className="card-img-top"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-flex justify-content-between">
                                    <p className="fw-bold text-success">Comments <i className="bi bi-chat-fill"></i>: 11</p>
                                    <p className="fw-bold text-secondary">Likes<i className="bi bi-hand-thumbs-up-fill"></i>: 10</p>
                                </div>
                                <Link to={'/Navbar'} className='readmore text-dark'>Read More...</Link>
                            </div>
                        </div> */}

                    </div>

                </section>
            <Footer />
            </DefaultLayout>

        </>
    )
}

export default Index;