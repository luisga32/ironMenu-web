import {createContext, useState } from 'react';

export  const OrderContext = createContext()

export function OrderContextProvider ({children}){

    const orderInit = {
        typeMenu: 'full',
        orderItems: []
      }

    const [order, setOrder] = useState(orderInit)

//  function that update order everytime click on a dish
    
      // useEffect (() => {
      //    console.log('order context: ' , order)

      // },[order])

    const newOrder = ((type) => {
      setOrder (() => (
        {
          orderItems: [],
          typeMenu: type
        }
      ))
    });
    const value = { 
        order ,
        setOrder,
        newOrder,
        orderInit
    }
   
    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>


}