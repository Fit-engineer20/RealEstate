import React from "react";
import Card from "./serviceCard.jsx";
import "./services.css";
import Cdata from "./cardData.jsx";

const Service = () => {

  const Cards = (values) =>{
    
    return(
       <Card 
       key={values.id}
       icon={values.icon}
       title={values.title}
       text={values.text}
       />
    );

  }
    return(
        <>
        <div className="serv-head">
        <h1 className="heading">Best Services</h1>
        <p className="head-text">We can give you the best service</p>
        <hr className="serv-hr" size="4"/>
        </div>
       <div class="container services">
        <div class="row">
         {Cdata.map(Cards)}
       </div>
      </div>

      </>
    );
}
export default Service;