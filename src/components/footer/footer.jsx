import React from "react";
import "./footer.css";

const Footer =() => {
   return(
       <footer className="footer">
        <div class="container">
        <div class="row footer-row">
           <div class="col-lg-3 col-md-6 col-sm-12 foot-col">
             <h1 className="logo">Company</h1>
             <h4>Find Your Dream home</h4>
             <p>Address</p>
             <i class="fas fa-phone">  Tel: +91 6457-8936</i>
             <i class="fas fa-envelope">  Email: dummycompany@mail.com</i>
             <div className="icon-div">
             <a href=" "><i class="fab fa-twitter icons"></i></a>
             <a href=" "><i class="fab fa-facebook-f icons"></i></a>
             <a href=" "><i class="fab fa-linkedin-in icons"></i></a>
             </div>
           </div>
           <div class=" col-lg-3 col-md-6 col-sm-12 foot-col">
             <h5 className="col-head">DASHBOARD</h5>
             <hr className="footer-hr" size="4" />
             <ul className="foot-list">
                <li> <a className="foot-links" href=" ">My Properties</a> </li>
                <li><a className="foot-links" href=" ">Create Property</a> </li>
                <li><a className="foot-links" href=" ">Customer review</a> </li>
                <li><a className="foot-links" href=" ">Edit Profile </a></li>
                <li><a className="foot-links" href=" ">Change Password</a> </li>
                <li><a className="foot-links" href=" ">Payment</a> </li>
                <li><a className="foot-links" href=" ">Login</a> </li>
                <li><a className="foot-links" href=" ">Logout</a> </li>
             </ul>
           </div>
           <div class=" col-lg-3 col-md-6 col-sm-12 foot-col">
           <h5 className="col-head">CATEGORIES</h5>
             <hr className="footer-hr" size="4" />
             <ul className="foot-list">
                <li><a className="foot-links" href=" ">Rent</a> </li>
                <li><a className="foot-links" href=" ">Land</a> </li>
                <li><a className="foot-links" href=" ">Full Furnished</a> </li>
                <li><a className="foot-links" href=" ">Floor</a> </li>
                <li><a className="foot-links" href=" ">Mortgage‎</a> </li>
             </ul>
           </div>
           <div class=" col-lg-3 col-md-6 col-sm-12 foot-col">
           <h5 className="col-head">QUICK LINKS</h5>
             <hr className="footer-hr" size="4" />
             <ul className="foot-list">
                <li><a className="foot-links" href=" ">About Us</a></li>
                <li><a className="foot-links" href=" ">Advertising Terms</a></li>
                <li><a className="foot-links" href=" ">Listings Quality Policy</a> </li>
                <li><a className="foot-links" href=" ">Terms & Conditions</a></li>
             </ul>
           </div>
        </div>
        </div>
       </footer>

   );
}

export default Footer;