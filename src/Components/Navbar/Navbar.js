import React from 'react';
import logo from './apple-logo.png';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Navbar() {

  return (
    <div className="main" style={{ gridArea: 'nav'}}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" >
          <img src={logo} className="logo" alt="Logo" ></img>
          <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0 mx-1">
              <span className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Store
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  Mac
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  iPad
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  iPhone
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  Watch
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  Vision
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  AirPods
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  TV & Home
                </Link>
              </span>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Support
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
