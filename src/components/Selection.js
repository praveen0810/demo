import React from 'react'
import "./selection.css";
import Dot from "../img/dot.png";
function Selection() {
    return (
        <div className="back">
          <div className="selection">
        <div className="dot">
                <select className="select" id="country">
                    <option value="country">Select your Country</option>
                    <option value="India">India</option>
                    <option value="Uk">UK</option>
                    <option value="USA">USA</option>
                   
                </select>
                <img className="dou" src={Dot} />
                </div>
                <div className="dot">
                <select className="select" id="country">
                    <option value="country">Select your Country</option>
                    <option value="India">India</option>
                    <option value="Uk">UK</option>
                    <option value="USA">USA</option>
                   
                </select>
                <img  className="dou" src={Dot} />
                </div>
                <div className="dot">
                <select className="select" id="country">
                    <option value="country">Select your Country</option>
                    <option value="India">India</option>
                    <option value="Uk">UK</option>
                    <option value="USA">USA</option>
                   
                </select>
                <img className="dou" src={Dot} />
                </div>

            </div>
            
            </div>
    )
}

export default Selection
