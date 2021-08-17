import React from 'react'
import "./bottom.css";
import Logo from '../img/logo.png';
import Twit from "../img/twit.png";
import Insta from "../img/insta.png";
import Fb from "../img/fb.png";
import You from "../img/you.png";
import SearchIcon from '@material-ui/icons/Search';




function Bottom() {
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
             <b className="is-visible">FullStack Developer Scheme</b>
             
             
         </span>
     </p>
 </div>
    </div>
    <div className="right">
        <div className="roww">
            <div className="columnn">
                <h4 className="hhh"> undefind</h4>
            </div>
            <div className="columnn">
                <h4 className="hhh"> undefind</h4>
            </div>
            <div className="columnn">
                <h4 className="hhh"> undefind</h4>
            </div>
            <div className="columnn">
                <h4 className="hhh"> undefind</h4>
            </div>
            <div className="columnn">
                <h4 className="hhh"> undefind</h4>
            </div>
            <div className="columnn">
                <h4 className="hhh"> undefind</h4>
            </div>
        </div>
  
  </div>
   </section>
   
   </div>
  
)
}

export default Bottom;

