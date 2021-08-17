import React from 'react'
import "./header.css";
import Logo from '../img/logo.png';
import Twit from "../img/twit.png";
import Insta from "../img/insta.png";
import Fb from "../img/fb.png";
import You from "../img/you.png";
import SearchIcon from '@material-ui/icons/Search';




function Header() {
    return (
      
  <div className="container">

  
   <section className="profile">
    <div className="left">
 <div className="avatar_block">
     <img src={Logo} alt=""/>
     <span>
         <i className="uil uil-comment-dots"> </i>
     </span>
 </div>
 <div>
     <h2> Praveen Kumar</h2>
     <p className="cd-headline loading-bar">
         <span className="cd-words-wrapper">
             <b className="is-visible">Mern Stack Developer Scheme</b>
            
             
         </span>
     </p>
 </div>
    </div>
    <div className="right">
  
   <div className="socials">
       <h1 className="home">English</h1>
       <li className="icons"> 
           <img src ={Twit}/>
       </li>
       <li className="icons"> 
           <img src ={Insta}/>
       </li>
       <li className="icons"> 
           <img src ={Fb}/>
       </li>
       <li className="icons"> 
           <img src ={You}/>
       </li>
      </div>
      <div className="header_input">
       <SearchIcon />
       <input placeholder="Seach Facebook" type="text" />
    </div>
    </div>
    
   </section>
   
   </div>
  
)
}

export default Header

