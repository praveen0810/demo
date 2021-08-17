import React, { useEffect, useState } from 'react'

import Sidebar from '../components/Sidebar'
import Posts from "../components/Posts";
import "./home.css"



function Home() {

    
    return (
      <>

          
            <div className="home">
       <Posts/>
       <Sidebar/>
        </div>
        </>
    )
}

export default Home;
