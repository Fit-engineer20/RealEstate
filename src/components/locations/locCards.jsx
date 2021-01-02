import React from "react";

const Locards = (props) => {
    return(
        <div class="col col-md-6 col-lg-4 col-sm-12">
        <div className="card loc-card">
          <img src={process.env.PUBLIC_URL + props.img} alt={props.name} />
          <a className="card-title locname" href=" ">{props.locname}</a>
          </div>
        </div>
    );
}
export default Locards; 