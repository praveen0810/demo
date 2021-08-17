import React from 'react'
import "./box.css";
import Pic1 from "../img/pic11.png";
import Pic2 from "../img/pic2.png";
import Pic3 from "../img/pic3.png";
import Pic4 from "../img/pic4.png";
import Pic5 from "../img/pic55.png";
import Pic6 from "../img/pic66.png";

function Box() {
    return (
        <div className="row">
            <div className="column">
                <img src={Pic1}/>
            </div>
            <div className="column">
                <img src={Pic2}/>
            </div>
            <div className="column">
                <img src={Pic3}/>
            </div>
            <div className="column">
                <img src={Pic4}/>
            </div>
            <div className="column">
                <img src={Pic5}/>
            </div>
            <div className="column">
                <img src={Pic6}/>
            </div>
            
            </div>
            
            
        
    )
}

export default Box
