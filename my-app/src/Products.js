import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './component/Product.css';


const Products =()=>{
return(
	<section className='pro'>

	<div id="wrap">
	<div id="columns" className="columns_4">
  <figure>
  <img src="https://m.media-amazon.com/images/I/614-QYdYpxS._SL1500_.jpg"/>
	<figcaption>Green Checkered Shirt</figcaption>
    <span className="price">$44</span>
    <a className="button" href="#">Buy Now</a>
	</figure>
	
	<figure>
	<img src="https://th.bing.com/th/id/OIP.M0AwCc7vaKp-t8DXjeq_JAHaHa?rs=1&pid=ImgDetMain"/>
	<figcaption>Green and Black Flowers</figcaption>
    <span className="price">$44</span>
    <a className="button" href="#">Buy Now</a>
	</figure>
	
  <figure>
	<img src="https://i1.wp.com/www.exubuy.com/wp-content/uploads/2021/11/p427418-av-01-zoom.jpg?resize=1024%2C1024&ssl=1"/>
	<figcaption>Black Dots</figcaption>
    <span className="price">$44</span>
    <a className="button" href="#">Buy Now</a>
	</figure>
  
	<figure>
	<img src="https://cdn.shopify.com/s/files/1/2540/9580/products/DSCF8007.jpg?v=1573521236"/>
	<figcaption>Red Flowy</figcaption>
    <span className="price">$44</span>
    <a className="button" href="#">Buy Now</a>
	</figure>
	
   <figure>
	 <img src="https://i.pinimg.com/originals/2e/0f/08/2e0f08aa69cd87bbe01e1623bedd6cbb.png"/>
	<figcaption>Yellow Button-Up</figcaption>
    <span className="price">$44</span>
    <a className="button" href="#">Buy Now</a>
	</figure>
	
   <figure>
	 <img src="https://th.bing.com/th/id/OIP.jthikaL6f8ewfiAGIUdaNgHaHa?rs=1&pid=ImgDetMain"/>
	<figcaption>Put a Bird On It</figcaption>
     <span className="price">$44</span>
     <a className="button" href="#">Buy Now</a>
	</figure>
  
	<figure>
	<img src="https://www.kurios-earth.co.za/wp-content/uploads/2022/01/Acne-1030x1030.jpg"/>
	<figcaption>Polka Dots</figcaption>
    <span className="price">$44</span>
    <a className="button" href="#">Buy Now</a>
	</figure>	
  
   <figure>
	<img src="https://edensherbals.com/assets/images/CBD-Tincture-Cinnamon-1000-back.jpg"/>
	<figcaption>Blue Spots</figcaption>
     <span className="price">$44</span>
     <a className="button" href="#">Buy Now</a>
	</figure>
  
 
</div>
</div>
</section>








);




};

export default Products;