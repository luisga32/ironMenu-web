import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/Usercontext';
import { OrderContext } from '../../contexts/OrderContext';
import { set } from 'mongoose';


const Product = ({ image, title, id }) => {

    const { user } = useContext(UserContext);
    const {order, setOrder } =useContext(OrderContext)

    console.log('user: ', user)

    const addProduct = (id) => {
        console.log('id: ' , id)
        setOrder({order : id})
    };
    
    

    return (
        <div className="card Product ms-5 mt-5">
            <Link className="text-decoration-none" to={`/menus/${id}`}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>

            </Link>
            {
                user && (
                    <div className="d-flex justify-content-end p-2">
                        <button className="btn btn-outline-light" onClick={addProduct(id)}>
                            <FontAwesomeIcon icon={faPlusCircle} size="2x" color="black" />
                        </button>
                    </div>

                )
            }


        </div>

    )
}

export default Product;












