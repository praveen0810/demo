import React from 'react'
import './sidebar.css';
import Avator from "../img/Avator.png";
import Post1 from "../img/post2.png";
import Post2 from "../img/post3.png";
import Twitt from "../img/twit.png";

import Logo from "../img/dot.png";

function Sidebar() {
    return (
        <div className="conatiner">

       

            <div className="sidebar">
          <div className="lft">
              <h1 className="tit"> Twittes By <span>Praveen</span></h1>
          </div>
          <div className="rit">
              <img src={Logo} />
          </div>
       
       </div>
       <div className="sidebar">
          <div className="lft">
          <div className="wrapper">
          <div className="bo">
              <img className ="imggg "src={Avator}/>
          </div>
          <div className="vo">
              Cheif Manister
              <p className="pp">@Ministryoffice </p>
          </div>
       </div>
         
          </div>
          <div className="ritt">
              <img src={Twitt} />
          </div>
       
       </div>
       <div class ="popular-post">
	
<div class="post-content"  >

<h4 className="des">India should discuss its concerns on terrorism directly with the <br/> Taliban, said U.S. Special Representative  for Afghanistan <br/>  Reconciliation Zalmay Khalilzad, adding that he had<br/>  discussed how India could playa “more active role” <br/>  in the Afghan reconciliation process during <br/> his talks in Delhi on Thursday.<br/>
</h4>
<div class ="post-image">
				<img src={Post1} class="img" alt="blog"/>
			</div>
			<div class = "post-info flex-row">
				<span>  <i class=
					"fa fa-calendar text-gray" aria-hidden="true"></i>&nbsp;&nbsp;January 14,2019 </span>
				<span> 2 Commets</span>
					</div>
				</div>
				<div class ="post-title">
					
					

			</div>
		</div>
       
        <div className="sidebar">
          <div className="lft">
          <div className="wrapper">
          <div className="bo">
              <img className ="imggg "src={Avator}/>
          </div>
          <div className="vo">
              Cheif Manister
              <p className="pp">@Ministryoffice </p>
          </div>
       </div>
         
          </div>
          <div className="ritt">
              <img src={Twitt} />
          </div>
       
       </div>
       <div class ="popular-post">
	
<div class="post-content"  >

<h4 className="des">India should discuss its concerns on terrorism directly with the <br/> Taliban, said U.S. Special Representative  for Afghanistan <br/>  Reconciliation Zalmay Khalilzad, adding that he had<br/>  discussed how India could playa “more active role” <br/>  in the Afghan reconciliation process during <br/> his talks in Delhi on Thursday.<br/>
</h4>
<div class ="post-image">
				<img src={Post1} class="img" alt="blog"/>
			</div>
			<div class = "post-info flex-row">
				<span>  <i class=
					"fa fa-calendar text-gray" aria-hidden="true"></i>&nbsp;&nbsp;January 14,2019 </span>
				<span> 2 Commets</span>
					</div>
				</div>
				
            <div class ="newsletter" >
    	<h3> Newsletter</h3>
    	<div class ="form-element">
    		<input type="text" class="input-element" placeholder="Email"/>
    		<button class="btn form-btn">Subscribe</button>
	</div>
</div>
		</div>
       
       </div>
      
       
      
       
     
   
        
    )
}

export default Sidebar
