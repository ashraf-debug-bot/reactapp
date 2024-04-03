import React from 'react';
import { Link } from 'react-router-dom';
import Bannerimg from './images/Untitled-1.png';
import Styles from './component/banner.css'



const Banner = () => {
    return (
      
      <div id="carouselExampleCaptions" className="carousel slide">

  <div className="carousel-inner">
    <div className=" active banner w-100">
      <img src={Bannerimg} alt="..."/>
     
    </div>
   
  </div>

</div>

    );
  };
  
  export default Banner;
  