import React from "react";
 

const Card =(props) => {

    return(
        
      <div class="col-md-6 col-lg-3 col-sm-12">
        <div className="card serv-card">
        <i className={props.icon}></i>
          <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    );
}
export default Card;