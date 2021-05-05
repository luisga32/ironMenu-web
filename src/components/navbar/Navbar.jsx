import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Misc/Button';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import LoggedButton from './LoggedButton';
import './Navbar.css';



const Navbar = () => {
  const { user } = useUserContext()
  let location = useLocation();

  const checkButtons = (() => {
    let home = false;
    let classButton=''
    if (location.pathname === '/') {
      home = true
    }
    if (user) {

      return (
        <div className="d-flex">
          <li className="nav-item pe-3">
            <LoggedButton name={user.name} />
          </li>

          { home && (
            <li className="nav-item pe-3">
              <Button classButton="btn-color" href="/menus" text="Hacer pedido" />
            </li>)}
        </div>
      )
    } else {

      if (!home) {
        classButton='btn-color'

      }
      return (
        <div className="d-flex">
          <li className="nav-item pe-3">
            <Button classButton={classButton} href="/login" text="iniciar sesion" />
          </li>

          { home && (
            <li className="nav-item pe-3">
              <Button classButton="btn-color" href="/menus" text="Ver carta" />
            </li>)}
        </div>
      )
    }
  })



  return (
    <header className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid px-5">
          <Link className="navbar-brand fs-1 fw-bolder" to="/" >ironMenu</Link>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav nav-pills">


              {checkButtons()}

            </ul>
          </div>
        </div>
      </nav>
    </header>


  )

}

export default Navbar;