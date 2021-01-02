import React from "react";

const Procards = (props) => {
    return(
        <div class="col col-md-6 col-lg-4 col-sm-12">
        <div className="card pro-card">
          <img className="pro-image" src={process.env.PUBLIC_URL + props.img} alt={props.title} />
          <div className="pro-content">
          <h4 className="pro-title">{props.title}</h4>
          <i class="fas fa-home pro-icons"> {props.rooms}</i>
          <i class="fas fa-bed pro-icons last-two">  {props.beds}</i>
          <i class="fas fa-bath pro-icons last-two"> {props.baths}</i>
          <hr className="pro-card-hr" />
          <button type="button" class="btn btn-outline-dark card-view-btn">View Details</button>
          </div>
          </div>
        </div>
    );
}
export default Procards; 