import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { getOrdersList } from '../../services/OrderServices';
import SyncLoader from 'react-spinners/SyncLoader';
import Navbar from '../navbar/Navbar';
import Order from './Order';


const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const { user } = useUserContext();

    useEffect(() => {
        if (user) {
            getOrdersList(user.id)
                .then((listOrders) => {
                    setOrders(listOrders)
                    setLoading(false)
                })
        };
    }, [loading, user])

    return (
        <div className="Orders">
            <Navbar/>
            <ul className="list-group">

                {
                loading 
                ? 
                (
                    <div className="text-center">
                        <SyncLoader color="blue" />
                    </div>

                ) :

                    orders.map((order) => (
                        
                            <Order order={order} key={order.id} />
                        
                    ))}

            </ul>
        </div>

    )






}


export default Orders;