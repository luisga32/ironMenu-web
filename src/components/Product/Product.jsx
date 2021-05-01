import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getProduct } from '../../services/ProductService';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';




const Product = () => {

    const [product, setProduct] = useState();
    const history = useHistory();

    const params = useParams()
    // making destructuring  and recover only id const {id} = useParams()

    useEffect(() => {
        getProduct(params.id)
            .then((dish) => {
                console.log('detalle dish: ', dish)
                setProduct(dish)
            })
    }, [params.id])

    if (!product) {
        return "Loading...";
    } else

        return (
            <div className="Product-product d-flex">
                <button className='button-arrow btn btn-outline-light' onClick={() => {history.goBack()}}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" color="black" />
                </button>
                <img src={product.image} className="product-image ms-3" alt={product.title} />
                <div className="product-body ms-5">
                    <h2 className="product-title mb-5">{product.title}</h2>
                    <div className="d-flex-column justify-content-left">
                        <h5 className="mb-3 pb-3 border-bottom border-3">Ingredientes</h5>
                        <p className="product-ingridients">{product.ingredients}</p>

                    </div>

                </div>

            </div>
        )
}

export default Product;