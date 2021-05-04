import React from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { logout } from '../../stores/accessTokenStore';

const LoggedButton = ({ name }) => {

    return (


        <div className="loggedButton dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                {name}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button" onClick={logout}>Cerrar Sesion</button></li>
                <li><a className="dropdown-item" href="#">Mis pedidos</a></li>
            </ul>
        </div>

    )


}

export default LoggedButton;