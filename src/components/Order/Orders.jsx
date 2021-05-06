import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { getOrdersList } from '../../services/OrderServices';
import SyncLoader from 'react-spinners/SyncLoader';
import Navbar from '../navbar/Navbar';
import Order from './Order';
import './Orders.css';



const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({
        exist: false,
        message: '',
        field: ''
    })

    const { user } = useUserContext();

    useEffect(() => {
        if (user) {
            getOrdersList(user.id)
                .then((listOrders) => {
                    setOrders(listOrders)
                    setLoading(false)
                })
                .catch((e) => {
                    const { errors } = e.response.data;
                    error.field = Object.keys(errors)
                    error.message = errors[error.field];
                    error.exist = true;
                    setLoading(false)
                    setError(error)

                })

        };
    }, [loading, user, error])


    const listOrders = () => {

        return (
            <div className="orders-box d-flex flex-column align-items-center">
                <div className="mt-3">
                    <h5>Mis pedidos</h5>
                </div>
                <div className="d-flex mt-4">
                    <ul className="list-group">
                        {
                            orders.map((order) => (
                                <Order order={order} key={order.id} />
                            ))
                        }
                    </ul>
                </div>
            </div>

        )
    }


    return (
        <div className="Orders">
            <Navbar />
            {
                loading
                    ?
                    (
                        <div className="text-center">
                            <SyncLoader color="blue" />
                        </div>

                    ) :
                    <>
                        {
                            error.exist ?
                                (
                                    <div className="orders-box order-box-error d-flex justify-content-center mt-5">
                                        <h5>{error.message}</h5>
                                    </div>
                                    
                                )
                                :
                                listOrders()
                        }
                    </>
            }


        </div>

    )






}


export default Orders;