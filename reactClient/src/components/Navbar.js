import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import NavLink from 'react-router-dom/NavLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (



<nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
<NavLink to="/"> <a class="navbar-brand">
    <img className="mr-2" src={require('../img/logo.svg')} width="30" height="30" alt=""/>
    Music Square
  </a></NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
    <ul class="navbar-nav w-100">
      <li class="nav-item active">
        <NavLink to="/albums"><a class="nav-link">Albums<span class="sr-only">(current)</span></a></NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/tracks"><a class="nav-link" >Tracks</a></NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/bands"><a class="nav-link" >Bands</a></NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/news"><a class="nav-link" >News</a></NavLink>
      </li>
      <div class=""></div>
    </ul>
  </div>
  {/* <button class="btn btn-sm btn-outline-secondary text-center" type="button">My Collection</button> */}
</nav>

    );
    }

export default withRouter(Navbar);

