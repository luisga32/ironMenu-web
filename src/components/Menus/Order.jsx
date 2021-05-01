import React, { useEffect, useState } from 'react';
import { useCourseContext } from '../../hooks/useCourseContext';
import { useOrderContext } from '../../hooks/useOrderContext';
import { getProduct } from '../../services/ProductService';
import './Order.css';

const Order = () =>{
    
    const { order } = useOrderContext();
    const [product, setProduct] = useState();
    const { course } = useCourseContext();

    console.log('course : ' , course);

    useEffect(() => {
        getDetailProduct()
  
    },[order.id]);

    const getDetailProduct = () => {
        if (order) {
            getProduct(order.id)
            .then((dish) => {
                console.log(dish)
                setProduct(dish)
            })
                
        } else {
            setProduct(null);
        }

    };


    return (
        <div className='Order mt-3 pt-2 border rounded border-primary'>

            <h3 >Tu pedido</h3>


            { product && (product.title)
            
            }

        </div>
    )
}


export default Order;