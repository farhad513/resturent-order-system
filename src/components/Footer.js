import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <Link to="https://www.instagram.com/" target={"_blank"}><InstagramIcon /></Link>
        <Link to="https://twitter.com/"> <TwitterIcon /></Link>
        <Link to={"https://www.facebook.com/"}> <FacebookIcon /> </Link>
        <Link to="https://www.linkedin.com/feed/"><LinkedInIcon /></Link> 
          
      </div>
      <p> &copy; Farhad </p>
    </div>
  );
}

export default Footer;
