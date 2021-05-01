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
        console.log('id: ', id)
        console.log('add product order:', order)
        console.log(' course: ' , course)
     
        const item ={};

        item.course = course;
        item.productId = id;
        item.price = 0;
        item.quantity = 0;
        order.orderItems.push(item);

        // if order.orderItems esta vacio
        // order.or
        
        console.log('orderItems : ', order.orderItems)
       
        order.id = id;

        setOrder( {...order} )
     //   setOrder((prev) =>( {...prev , order.id: id} ))
    };


    const removeProduct = () => {

        order.orderItems.forEach( (item , pos) => {
            if (item.course === course) {
                order.orderItems.splice(pos,1)
            }
        })
      
        order.id = null;
        setOrder( {...order} )
        }

    

    const productButton = () => {

        console.log('order:', order)

        if (order.id === id) {
            return (
                <div className="d-flex justify-content-end p-2">
                    <button className="btn btn-outline-light" onClick={removeProduct}>
                        <FontAwesomeIcon icon={faMinusCircle} size="1x" color="black" />
                    </button>
                </div>
            )

        } else {
            return (
                <div className="d-flex justify-content-end p-2">
                    <button className="btn btn-outline-light" onClick={addProduct}>
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" color="black" />
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="card Product ms-5 mt-1">
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












