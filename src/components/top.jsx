import React from "react";
import "./top.css";

const Top = () => {
    return(
          
        <>
      <div className="head" >
       <img className="top-img" src={process.env.PUBLIC_URL + "/images/img-1.png"} />
       <div className="membrane"></div>
       <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container-fluid">
             <a className="navbar-brand brand" href="#">Company</a>
             <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav nav-option">
                 <li className="nav-item ">
                   <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Properties</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Categories</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Agents</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Contact</a>
                 </li>
                 <li className="nav-item">
                 <button type="button" class="btn btn-outline-dark login nav-btn">LOGIN</button>
                 </li>
                 <li className="nav-item">
                 <button type="button" class="btn btn-outline-dark signup nav-btn">SIGN UP</button>
                 </li>
               </ul>
             </div>
           </div>
          </nav>

          <div className="top-text">
            <h1 className="text-head">Find Your Dream Home.</h1>
            <p className="text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidica.</p>
          </div>

      </div>
    </>
    );
}
export default Top;