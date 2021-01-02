import React from "react";
import "./locations.css";
import Locards from "./locCards.jsx";
import Locdata from "./locData.jsx";
const Location = () => {

    const locCards= (values) =>{
        return(
            <Locards 
            key={values.id}
            img={values.img}
            locname={values.locname}
            />
        );
    }

    return(
       <>
        <div className="loc-div">

        <div className="sub-div">
         <h1 className="loc-heading">Locations</h1>
         <p className="loc-text">Find a house for sale or rent on a location basis.</p>
         <hr className="loc-hr" size="4"/>
         <button type="button" class="btn btn-outline-dark view-btn">View All Locations</button>
        </div>
        <div class="container">
        <div class="row loc-row">
         {Locdata.map(locCards)}
       </div>
      </div>
        </div>
       </>
    );
}

export default Location;