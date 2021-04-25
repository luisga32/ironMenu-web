import React from 'react';
import Products from './Products';



const ProductsCourse = ({course, products , active}) => {

    const {name} = course;

return (
<div className={`tab-pane fade ${ active ? 'show active' : ''}`}  id={name} role="tabpanel" aria-labelledby={`${name}-tab`}>
       <Products products={products} />
    </div>

)
    
}

export default ProductsCourse;