import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import Button from '../Misc/Button';


const Navbar = () => {

    return (
        <header className="Navbar"> 
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
          <Link className="navbar-brand fs-1 fw-bolder" to="/" >ironMenu</Link>
         <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav nav-pills">
              <li className="nav-item pe-3">
                <Button classButton="" href="/login" text="iniciar Sesión"/>
              </li>
              <li className="nav-item pe-3">
              <Button classButton="btn-primary" href="/menus" text="Ver carta"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </header>
 

    )
 
}

export default Navbar;