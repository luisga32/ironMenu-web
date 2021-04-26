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
                    <Course course={cors} setCourse={setCourse} active={active} key={cors.name}/>
                  )
                })}
     
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
                    <ProductsCourse course={cors} products={products} active={active} key={cors.name}/>
                  )
                })}

              </div>

            </Fragment>



          )
      }

    </div>

  )

}

export default Menu;