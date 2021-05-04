import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Misc/Button';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import LoggedButton from './LoggedButton';



const Navbar = () => {
const { user } = useUserContext()
  let location = useLocation();

  const checkButtons = (() => {
    let home = false;
    if (location.pathname === '/') {
      home = true
    }
    if (user) {

      return (
        <div className="d-flex">
          <li className="nav-item pe-3">
            <LoggedButton name={user.name}/>
            {/* <button className="btn" onClick={logout}>Cerrar Sesion</button> */}
          </li>

          { home && (
            <li className="nav-item pe-3">
              <Button classButton="btn-primary" href="/menus" text="Hacer pedido" />
            </li>)}
        </div>
      )
    } else {
      return (
        <div className="d-flex">
          <li className="nav-item pe-3">
            <Button classButton="" href="/login" text="iniciar sesion" />
          </li>

          { home && (
            <li className="nav-item pe-3">
              <Button classButton="btn-primary" href="/menus" text="Ver carta" />
            </li>)}
        </div>
      )
    }
  })



    //   if (user) {


    //     if (home) {
    //       return (
    //         <div className="d-flex">
    //           <li className="nav-item pe-3">
    //                  <button className="btn" onClick={logout}>Cerrar Sesion</button>
    //          </li>
    //           <li className="nav-item pe-3">
    //             <Button classButton="btn-primary" href="/menus" text="Hacer pedido" />
    //           </li>
    //         </div>
    //       )
    //     } else
    //       return (
    //         <div className="d-flex">
    //           <li className="nav-item pe-3">
    //           <button className="btn" onClick={logout}>Cerrar Sesion</button>
    //           </li>
    //         </div>
    //       )

    //   } else {

    //     if (home) {
    //       return (
    //         <div className="d-flex">
    //           <li className="nav-item pe-3">
    //             <Button classButton="" href="/login" text="iniciar sesion" />
    //           </li>
    //           <li className="nav-item pe-3">
    //             <Button classButton="btn-primary" href="/menus" text="Ver carta" />
    //           </li>

    //         </div>


    //       )
    //     } else
    //       return (
    //         <div className="d-flex" >
    //           <li className="nav-item pe-3">
    //             <Button classButton="" href="/login" text="iniciar sesion" />
    //           </li>
    //         </div>
    //       )

    //   }

    // });



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