import './Newblog.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import http from './api/http';
const Newblog =() =>{
   const [image, setImage] = useState('')
   const [title, setTittle] = useState('')
   const [body, setBody] = useState('')
   const [author, setAuthor] = useState('')

// post api
    const Posted = (e)=>{
      e.preventDefault();
      if(title){
        postimage()
      }
      else{ return};
    }

     const handlechange = (e)=>{
      console.log(e.target.files);
        setImage(e.target.files[0]);
    }
   
    const postimage = ()=>{
      const url = "https://blogim.onrender.com"
      const formData = new FormData()
      formData.append('testi', image)
      formData.append('tittle',title)
      formData.append('body',body)
      formData.append('author',author)
      axios.post(url, formData).then((res) => {
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }

    // get api
    const [data, setData] = useState([])
  
   useEffect(()=>{
    
    const getData = async()=>{
      try {
        const res =  await http.get("/")
        const parse = res.data
        setData(parse)
      } catch (error) {
         console.log(error);
      }
    }
    getData()
   },[])

 
   //delete api 

   const id = async(id,i)=> {
    await http.post("/delete",{id})
    setData([...data].filter((item,index)=>{
      return index!=i
    }))
  }



        return (
         <>
            <div className='create'>
                <Link to={'/'}><i id='move' class="fa-solid fa-arrow-left"></i></Link>
              <h2>Add a new blog</h2>      
              <form>
              <label>Blog title:</label>
                <input
                  type="text"
                  required onChange={e => setTittle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea
                  id="textarea"
                  required onChange={e => setBody(e.target.value)}></textarea>
              <label>Blog Author:</label>
        <select onChange={e => setAuthor(e.target.value)}>
        <option value="">Select</option>
          <option value="Sam">Sam</option>
          <option value="Ben">Ben</option>
          <option value="Was">Was</option>
        </select>
                <label>Author Image:</label>
                <img width={"100%"} src={image === "" ? "" :
                 URL.createObjectURL(image)} />
                <label style={styles.label}>
                <i class="fa-solid fa-plus"></i>
                <input type="file" required style={styles.main} onChange={handlechange}/>
                </label>
                <button onClick={Posted}>Add Blog</button>
              </form>
            </div> <br /> <br />

{/* image display */}
<div>
   <h1>image upload</h1>
{data.length}
<div style={{display:'flex', flexWrap:"wrap", justifyContent:"space-between"}}>
{
                    data.map((news, index) =>{
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
                                    {/* <Link to={`/Content/${news._id}`}  className="btn btn-primary">Read More...</Link> */}
                                    <button className="btn btn-danger" onClick={()=>id(_id,index)}>delete</button> 
                                </div>
                            </div>
                        )
                    })}
</div>
</div>
         </>
    )
}
const styles = { 
  main:{
    backgroundColor:'black',
    display:'none',

  },
  label:{
    border:'1px solid black',
    width:'40px',
    height:'40px',
    borderRadius: "50%",
    cursor:"pointer",
    display:"flex", justifyContent:"center", alignItems:"center", textAlign:'center'
  }
}
export default Newblog