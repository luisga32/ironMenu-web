import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../hooks/useUserContext';
import { useOrderContext } from '../../hooks/useOrderContext';
import { useCourseContext } from '../../hooks/useCourseContext';


const Product = ({ image, title, id }) => {

    const { user } = useUserContext();
    const { course } = useCourseContext();
    const { order, setOrder } = useOrderContext();



    const addProduct = () => {


        const item = {};

        item.course = course;
        item.productId = id;
        item.title = title;
        item.price = 0;
        item.quantity = 1;
        order.orderItems.push(item);

        //   order.id = id;

        setOrder({ ...order })
        //   setOrder((prev) =>( {...prev , order.id: id} ))
    };


    const removeProduct = () => {
        const pos = order.orderItems.findIndex( item => item.productId === id)
        order.orderItems.splice(pos, 1)
  
        setOrder({ ...order })
    }



    const productButton = () => {

        //    console.log('order:', order)

        if (order.orderItems.length > 0) {
            const foundCourse = order.orderItems.some( item =>  item.course === course) 
            const foundItem = order.orderItems.find( item => item.productId === id)
                if (foundCourse) {
                    if (foundItem) {
                        return (
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-light" onClick={removeProduct}>
                                    <FontAwesomeIcon icon={faMinusCircle} size="1x" color="black" />
                                </button>
                            </div>
                        )

                    } else {
                        return (
                           
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-light disabled" onClick={addProduct}>
                                    <FontAwesomeIcon icon={faPlusCircle} size="1x" color="black" />
                                </button>
                            </div>
                        )
                    }
                } else {
                        return (
                            
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-light" onClick={addProduct}>
                                    <FontAwesomeIcon icon={faPlusCircle} size="1x" color="black" />
                                </button>
                            </div>
                        )
                    }
                

        } else {

            return (
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-light" onClick={addProduct}>
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" color="black" />
                    </button>
                </div>
            )

        }
    }

    return (
        <div className="card Product ms-5 mb-2">
            <Link className="text-decoration-none" to={`/menus/${id}`}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body d-flex-inline">
                    <p className="card-title">{title}</p>
                </div>

            </Link>
            {
                user && productButton()
            }


        </div>

    )
}

export default Product;












