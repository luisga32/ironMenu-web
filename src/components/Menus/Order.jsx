import React, { useEffect, useState } from 'react';
import { useOrderContext } from '../../hooks/useOrderContext';
import { getProduct } from '../../services/ProductService';


const Order = () =>{
    
    const { order } = useOrderContext();
    const [product, setProduct] = useState();


    useEffect(() => {
        getDetailProduct()
  
    },[product]);

    const getDetailProduct = () => {
        if (order.id) {
            getProduct(order.id)
            .then((dish) => {
                console.log(dish)
                setProduct(dish)
            })
                
        }
    };


    return (
        <div className='Order'>

            <h3 >Tu pedido</h3>


            { product && (product.title)
            
            }

        </div>
    )
}


export default Order;