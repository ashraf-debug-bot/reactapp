import React from 'react';
import { Link } from 'react-router-dom';
import styles from './component/top.css';

const Top =()=>{

return(
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
       
     
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)"> <i class="fa-solid fa-envelope"></i> trueashraf27@gmail.com</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)"><i class="fa-solid fa-phone"></i> 9025923916</a>
            </li>
         
          </ul>
          <li className="nav-item d-flex icons">
              <a className="nav-link" href="javascript:void(0)"><i class="fa-brands fa-facebook"></i></a>
              
            </li>
            <li className="nav-item d-flex icons">
            <a className="nav-link" href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a>
              
            </li>
            <li className="nav-item d-flex icons">
            <a className="nav-link" href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a>
              
            </li>
            <li className="nav-item d-flex icons">
            <a className="nav-link" href="javascript:void(0)"><i class="fa-solid fa-phone"></i></a>
              
            </li>
        </div>
      </div>
    </nav>
);

};

export default Top;