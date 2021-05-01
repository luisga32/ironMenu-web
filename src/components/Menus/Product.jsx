import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { set } from 'mongoose';
import { useUserContext } from '../../hooks/useUserContext';
import { useOrderContext } from '../../hooks/useOrderContext';


const Product = ({ image, title, id }) => {

    const { user } = useUserContext();
    const { order, setOrder } = useOrderContext();

   

    const addProduct = () => {
        console.log('id: ', id)
        console.log('add product order:', order.id)

        order.id = id;

        console.log('add product order despues:', order.id)
        setOrder( {...order} )
    };


    const removeProduct = () => {
        order.id = '';
        setOrder( {...order} )
        }

    

    const productButton = () => {

        console.log('order:', order)

        if (order.id === id) {
            return (
                <div className="d-flex justify-content-end p-2">
                    <button className="btn btn-outline-light" onClick={removeProduct}>
                        <FontAwesomeIcon icon={faMinusCircle} size="2x" color="black" />
                    </button>
                </div>
            )

        } else {
            return (
                <div className="d-flex justify-content-end p-2">
                    <button className="btn btn-outline-light" onClick={addProduct}>
                        <FontAwesomeIcon icon={faPlusCircle} size="2x" color="black" />
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="card Product ms-5 mt-5">
            <Link className="text-decoration-none" to={`/menus/${id}`}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>

            </Link>
            {
                user && productButton()
             }


        </div>

    )
}

export default Product;












