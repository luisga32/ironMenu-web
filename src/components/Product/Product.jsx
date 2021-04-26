import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const Product = () => {

     const [product,setProduct] = useState('');

     console.log('entro en product')
    // location = useLocation();


    // useEffect(() => {
    //     getProduct(id)
    //       .then((dish) => {
    //         setProduct(dish)
    
    //       })
    //   }, [id])

    if (!product) {
        return "Loading...";
    } else 

    return (
        <div className="Product">
hola
        </div>
    )
}

export default Product;