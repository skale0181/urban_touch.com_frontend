import { useNavigate } from "react-router-dom";
import React from "react";
import "./Footer.css";

//---material icons------------------//
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Footer = () => {
  const navigate = useNavigate()
  return (
   
    <div className="footer_div">
      <div className="upper_foot_div">
        <div className="upper_foot_1">
          <span style={{ fontSize: "20px" }}>Find Out More</span>
          <hr />
          <div onClick={()=>navigate("/about-us")}>About us</div>
          <div>Workshop</div>
          <div>Blog</div>
          <div>For Companies</div>
          <div>Contact</div>
          <div>Return & Exchange Policy</div>
          <div>Return Policy</div>
          <div>Terms Of Service</div>
        </div>
        <div className="upper_foot_2">
          <span style={{ fontSize: "20px" }}>Newslatter</span>
          <hr />
          <div className="input_join">
            <input type="text" placeholder="your email-example@gmai.com" style={{ border: "none" }} />
            <button style={{color:"black"}}>Join</button>
          </div>
        </div>
      </div>

      <div className="lower_foot_div">
        <div className="lower_foot_1">
          <span>© URBAN TOUCH FOUNDATION 2022</span>
          <br />
          
          <a href="https://www.facebook.com/profile.php?id=100008843444757" style={{textDecoration:"none", color:"black"}}><FacebookIcon style={{margin:"10px"}} /></a>
         <a href="https://www.instagram.com/pencil_illustration0181/?utm_medium=copy_link" style={{textDecoration:"none", color:"black"}}> <InstagramIcon style={{margin:"10px"}} /></a> 
          <a href="https://www.linkedin.com/in/sagar-kale-98a26a176/" style={{textDecoration:"none", color:"black"}}><LinkedInIcon style={{margin:"10px"}}  /></a>
         <a href="#" style={{textDecoration:"none", color:"black"}}><YouTubeIcon style={{margin:"10px"}}  /></a>
         <a href="#" style={{textDecoration:"none", color:"black"}}><TwitterIcon style={{margin:"10px"}} /></a>
          
          
        </div>
        <div></div>
      </div>
    </div>
  
  );
};
