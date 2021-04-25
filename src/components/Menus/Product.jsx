import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = ({ image, title, id }) => {

    return (
        <div className="card Product ms-5 mt-5">
            <Link className="text-decoration-none" to={`/products/${id}`}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>

            </Link>

        </div>

    )
}

export default Product;












