import React, { useEffect, useState } from 'react';
//import { Route, Switch } from 'react-router-dom';
import OrderModal from './OrderModal';
import { typeMenu } from '../../constants/constans';
import './Order.css';



const Order = ({ order }) => {

    const [orderDetail, setOrderDetail] = useState(order)
    const [showModal, setShowModal] = useState(false)
    console.log(showModal)
    useEffect(() => {
        console.log('ORDER Effect id:', order.id)
        const date = getDate(order.createdAt)
        let typeOrderMenu = '';
        typeMenu.forEach((type) => {
            if (type.key === order.typeMenu) {
                typeOrderMenu = type.description
            }
        })
        setOrderDetail((prev) => ({ ...prev, date: date, typeMenu: typeOrderMenu }))
    }, [order])


    const getDate = (createdAt) => {
        let date = '0001/01/01'
        if (createdAt) {

            date = createdAt.slice(0, 10)
        }
        return date

    }

    
    return (
        <div>
            <li className="Order list-group-item d-flex flex-row justify-content-between" >
                <div >
                    <h6>{orderDetail.id}</h6>
                    <p>La fecha de su pedido: {orderDetail.date}</p>
                    <p>Precio: {orderDetail.price} €</p>
                </div>

                <div className="d-flex flex-column">
                    <p>{orderDetail.state}</p>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>Detalle</button>
                </div>
            </li>
            {showModal && <OrderModal order={orderDetail} setShowModal={setShowModal}/>}
            {/* <Switch>
            <Route exact path='/user/me/orders/:id' component={OrderDetail}></Route>
        </Switch>*/}

        </div>


    )


};




export default Order;