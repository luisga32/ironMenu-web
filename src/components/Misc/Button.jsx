import React from 'react';
import {Link } from 'react-router-dom';

const Button =  ({href, classButton,text,disabled }) => {

return (
    <Link className={`btn  ${classButton}`} to={href} role="button" disabled={!disabled}>{text} </Link>
)}


export default Button;
