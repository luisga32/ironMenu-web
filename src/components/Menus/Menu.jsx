import React, { Fragment, useEffect, useState } from 'react';
import { getProductsList } from '../../services/ProductService';
import Navbar from '../navbar/Navbar';
import SyncLoader from 'react-spinners/SyncLoader';
import Course from './Course';
import ProductsCourse from './ProductsCourse';

const COURSES = [
  {
    name: 'starter',
    description: 'Entrante'
  },
  {
    name: 'main',
    description: 'Principal'
  },
  {
    name: 'dessert',
    description: 'Postre'
  },
  {
    name: 'extra',
    description: 'Extra'
  }
];



const Menu = () => {

  // state for type of course

  // tengo que cambiar el valor cada vez que se cambie de pestaña
  const [course, setCourse] = useState('starter')

  // state for list of products
  const [products, setProducts] = useState([])


  useEffect(() => {
    getProductsList(course)
      .then((dishes) => {
        setProducts(dishes)


      })
  }, [course])


  return (
    <div className="Menu">
      <Navbar />

      {
        (!products)
          ?
          (
            <div className="text-center">
              <SyncLoader color="blue" />
            </div>
          )
          : (
            <Fragment>
              <ul className="nav nav-tabs" id="myTab" role="tablist">

                {COURSES.map(cors => {
                  let active;
                  if (cors.name === course) {
                    active = true
                  } else {
                    active = false
                  }

                  return (
                    <Course course={cors} setCourse={setCourse} active={active} />
                  )
                })}
                {/* <Course course={COURSES[0]} setCourse={setCourse} active='true'/> */}
                {/* <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
            Entrante
      </button>
        </li> */}
              </ul>
              <div className="tab-content" id="myTabContent">
              {COURSES.map(cors => {
                  let active;
                  if (cors.name === course) {
                    active = true
                  } else {
                    active = false
                  }

                  return (
                    <ProductsCourse course={cors} products={products} active={active} />
                  )
                })}

                {/* <div className="tab-pane fade show active" id="starter" role="tabpanel" aria-labelledby="starter-tab">
                  <Products products={products} />
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <Products products={products} />
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <Products products={products} />
                </div>
                <div className="tab-pane fade" id="extra" role="tabpanel" aria-labelledby="extra-tab">
                  <Products products={products} />
                </div>
                <div className="tab-pane fade" id="finalizar" role="tabpanel" aria-labelledby="finalizar-tab">
                  <Products products={products} />
                </div> */}
              </div>

            </Fragment>



          )
      }

    </div>

  )

}

export default Menu;