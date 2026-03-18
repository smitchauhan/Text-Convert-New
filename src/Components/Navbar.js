import PropTypes from 'prop-types';
import { useState } from 'react';
function Navbar(props){



    return(
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.newvar}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
   
      </ul>
 
    </div>
      <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' :'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.togglemode} />
  <label className="form-check-label" htmlFor="switchCheckDefault">{`${props.mode == 'light' ? 'dark' : 'light'} Mode`}</label>
</div>
  </div>
</nav>
    )
}


export default Navbar;

