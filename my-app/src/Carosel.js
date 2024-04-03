import React from 'react';
import { Link } from 'react-router-dom';
import styles from './component/carosel.css';


const Carosel = () => {
    return (
      
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/7796455/pexels-photo-7796455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-content'>First slide label</h5>
        <p className='text'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/8102128/pexels-photo-8102128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='content'>Second slide label</h5>
        <p className='content-para'>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    );
  };
  
  export default Carosel;
  