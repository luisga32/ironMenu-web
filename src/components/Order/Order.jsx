import React from 'react';
import { Switch, useParams } from 'react-router-dom';

import Button from '../Misc/Button';

const Order = ({id, createdAt, price, productOrder}) =>{

    const getDate = (createdAt) =>{   return `${createdAt.getFullYear()}/${createdAt.getMonth()}/${createdAt.getDay()}`  }


    return (
        <div>
       <li className="Order list-group-item" >
            <div>
                <h3>{id}</h3>
                {/* <p>La fecha de su pedido: {getDate(createdAt)}</p> */}
                <div className="d-flex justify-content-between">
                <p>Precio: {price} €</p>    
                <Button classButton="btn-primary" href="/user/me/orders/order" text="Detalle" />

                </div>


                
            </div>

        </li>
{/* 
        <Switch>
            <Router exact path='/user/me/orders/order' component={OrderDetail}></Router>
        </Switch> */}
        </div>

 
    )


};


export default Order;