import React from 'react';
import './BtnOrder.css';

const BtnOrder = ({type, className, newOrder}) => {
    return (

<button className={`${className} py-4 BtnOrder`} id={`${type.key}-btn`}
    data-bs-toggle="tab" data-bs-target={`#${type.key}`} type="button"
    key={type.key}
    aria-controls={type.key} onClick={() => newOrder(type.key)}>
    {type.description} {type.price} €
</button>

    )
}

export default BtnOrder;
