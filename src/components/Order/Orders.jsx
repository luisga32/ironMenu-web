import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { getOrdersList } from '../../services/OrderServices';

import Order from './Order';


const Orders = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useUserContext();
  
    useEffect(() => {
        if (user) {
            console.log( 'user: ' ,user.id)
            getOrdersList(user.id)
            .then((orders) => {
                console.log(' orders: ' , orders)
                setOrders(orders)
            })
            .catch ( (e) => {console.log( 'error ' , e)})

        } else {

            console.log('user : ', user)
        }
    },[])

    return (
        <div className="Orders">
            <ul class="list-group">

            {orders.map((order) =>(
                <Order order={order} key={order.id}/>
            ))}

            </ul>
        </div>

    )






}


export default Orders;