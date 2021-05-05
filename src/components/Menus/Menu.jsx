import React, { Fragment, useEffect, useState } from 'react';
import { getProductsList } from '../../services/ProductService';
import { createOrder } from '../../services/OrderServices';
import Navbar from '../navbar/Navbar';
import SyncLoader from 'react-spinners/SyncLoader';
import Course from './Course';
import ProductsCourse from './ProductsCourse';
import Order from './Order';
import { useUserContext } from '../../hooks/useUserContext';
import { useCourseContext } from '../../hooks/useCourseContext';
import { useOrderContext } from '../../hooks/useOrderContext';
import { typeMenu } from '../../constants/constans';
import { useHistory } from 'react-router';
import './Menu.css';

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
  const { user } = useUserContext();
  // state for type of course
  const history = useHistory();
  const { course, setCourse } = useCourseContext();
  // state for list of products
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { order, setOrder, orderInit } = useOrderContext();

  useEffect(() => {
    getProductsList(course)
      .then((dishes) => {
        setProducts(dishes)
        setLoading(false)
      })
  }, [course])

  const confirmOrder = () => {
    let orderDetail = {}
    orderDetail.userId = user.id;
    orderDetail.typeMenu = order.typeMenu;
    const typeMenuOrder = typeMenu.find(item => order.typeMenu === item.key)
    orderDetail.price = typeMenuOrder.price;
    orderDetail.address = user.address;
    orderDetail.productsOrder = [];
    order.orderItems.forEach(element => {
      let dish = {}
      dish.course = element.course;
      dish.productId = element.productId;
      dish.price = element.price;
      dish.quantity = element.quantity;
      orderDetail.productsOrder.push(dish);
    });

    createOrder(orderDetail)
      .then((order) => {
        setOrder(orderInit)
        history.push('/');
      })




  };


  let confirmOrd = false;
  if (order && order.orderItems.length === 4) {
    confirmOrd = true
  }

  return (
    <div className="Menu">
      <Navbar />
      <ul className="nav nav-tabs" id="myTab" role="tablist">

        {COURSES.map(cors => {
          let active = false;
          if (cors.name === course) {
            active = true
          }
          return (
            <Course course={cors} setCourse={setCourse} active={active} key={cors.name} />
          )
        })}
        <li className="nav-item Course" role="presentation" >
          <button className={`nav-link ${(user && confirmOrd) ? 'active buttonCourseActive' : ''} `} data-bs-toggle="tab" data-bs-target='confirm'
            type="button" role="tab" disabled={!user || !confirmOrd}
            aria-controls='confirm' aria-selected="true" onClick={confirmOrder}>
            Confirmar Pedido
  </button>

        </li>

      </ul>
        <div clss></div>
      {
        (loading)
          ?
          (
            <div className="text-center">
              <SyncLoader color="blue" />
            </div>
          )
          : (
            <Fragment>
              <main className='main d-flex flex-row'>
                <div className={`tab-content ${(user) ? 'col-9' : ''}`} id="myTabContent">
                  {COURSES.map(cors => {
                    let active;
                    if (cors.name === course) {
                      active = true
                    } else {
                      active = false
                    }
                    return (
                      <ProductsCourse course={cors} products={products} active={active} key={cors.name} />
                    )
                  })}
                </div>
                {user && (
                  <Order />
                )}
              </main>
            </Fragment>
          )
      }
    </div>
  )
}

export default Menu;