import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/img.png';
import styles from './component/Navbar.css';



const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg  bg-dark">
    <div className="container">
      <a className="navbar-brand text-white" href="#"><img className="logo-img" src={img1}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end"> 
          <li className="nav-item ">
            <a className="nav-link active text-white px-3" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#">Review</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
