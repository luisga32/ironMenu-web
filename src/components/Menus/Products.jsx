import React from 'react';
import Product from './Product';


const Products  = ({products}) => {



    return (
        <div className="Products d-flex flex-wrap justify-content-left mt-3">

            {
                products.map((dish) => (
                    <Product {...dish} key={dish.id}/>     

                ))
            }

        </div>
    )
}

export default Products;
