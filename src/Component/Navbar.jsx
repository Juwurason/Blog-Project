import React from "react";
import { useState } from "react";


function Navbar() {

  const na = () =>{
    console.log(33);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SokeBizloaded</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#card">Trending</a>
              </li>
            </ul>
            <div className="d-flex">
              <select name="" id="" className="border rounded">
                <option value="">Categories</option>
                <option value="">Sports</option>
                <option value="">Politics</option>
              </select>
              <button className="btn p-0 ms-2 me-2 mt-0 mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
              </button>
            
            </div>
          </div>
        </div>
      </nav>
    </>
  )}


export default Navbar;