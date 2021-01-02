import React from "react";
import "./properties.css";
import Procards from "./proCards.jsx";
import Prodata from "./proData.jsx";

const Properties = () => {

    const proCard= (values) =>{
        return(
            <Procards 
            key={values.id}
            img={values.img}
            title={values.title}
            rooms={values.rooms}
            beds={values.beds}
            baths={values.baths}
            />
        );
    }

    return(
       <>
        <div className="pro-div">

        <div className="pro-sub-div">
         <h1 className="pro-heading">Featured Properties</h1>
         <p className="pro-text">Find the latest homes for sale, property news & real estate market data</p>
         <hr className="pro-hr" size="4"/>
         <button type="button" class="btn btn-outline-dark pro-btn">View All Properties</button>
        </div>
        <div class="container">
        <div class="row pro-row">
         {Prodata.map(proCard)}
       </div>
      </div>
        </div>
       </>
    );
}

export default Properties;