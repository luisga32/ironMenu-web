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
import BtnOrder from '../Misc/BtnOrder';

const COURSES = [
  {
    name: 'starter',
    description: 'Entrante',
    typeMenu : ['full','menu']
  },
  {
    name: 'main',
    description: 'Principal',
    typeMenu : ['full','half','menu']
  },
  {
    name: 'dessert',
    description: 'Postre',
    typeMenu : ['full','half','menu']
  },
  {
    name: 'extra',
    description: 'Extra',
    typeMenu : ['full','half','menu']
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
  const { order, setOrder, orderInit , newOrder } = useOrderContext();

  useEffect(() => {
    getProductsList(course)
      .then((dishes) => {
        setProducts(dishes)
        setLoading(false)
      })
  }, [course])

  
  const initCoursesTypeMenu = (type) =>{
    return  COURSES.filter( (course) => course.typeMenu.includes(type))

  }


  const initNewOrder = (type) => {
    newOrder(type)
    const coursesTypeMenu = initCoursesTypeMenu(type)
    const {name }= coursesTypeMenu[0]
      setCourse(name);


  }

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
  const { maxCourses } = typeMenu.find ( type => type.key === order.typeMenu)
  if (order && order.orderItems.length === maxCourses) {
    confirmOrd = true
  }
  const coursesTypeMenu = initCoursesTypeMenu(order.typeMenu);

  return (
    <div className="Menu">
      <Navbar />
      <div className='d-flex flex-column'>
        <div className="list-group flex-row py-3 px-5 tabs">
            {
              typeMenu.map((type) => {
                return (
                
                <BtnOrder type={type} 
                className={`list-group-item align-items-center border rounded list-group-item-action ${type.key === order.typeMenu && ('active')} `} 
                newOrder={initNewOrder} />
              )})
            }
        </div>
        <div className='flex-row'>
          <ul className="nav nav-tabs tabs" id="TabCourses" role="tablist">

            {coursesTypeMenu.map(cors => {
              let active = false;
              if (cors.name === course) {
                active = true
              }
              return (
                <Course course={cors} setCourse={setCourse} active={active} key={cors.name} />
              )
            })}
            <li className="nav-item Course" role="presentation" >
              <button className={`${(user && confirmOrd) ? 'active buttonOrderActive' : 'buttonCourseNotActive'} nav-link `} data-bs-toggle="tab" data-bs-target='confirm'
                type="button" role="tab" disabled={!user || !confirmOrd}
                aria-controls='confirm' aria-selected="true" onClick={confirmOrder}>
                Confirmar Pedido
            </button>

            </li>

          </ul>


        </div>


      </div>
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