import React from 'react';
import {Link } from 'react-router-dom';

const Button =  ({href, classButton,text }) => {

return (
    <Link className={`btn  ${classButton}`} to={href} role="button">{text}</Link>
)}


export default Button;
