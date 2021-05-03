import {createContext, useEffect, useState } from 'react';

export  const OrderContext = createContext()

export function OrderContextProvider ({children}){

    const  orderInit = {
        typeMenu: 'full',
        orderItems: []
      }

    const [order, setOrder] = useState(orderInit)

//  function that update order everytime click on a dish
    
      useEffect (() => {
         console.log('order context: ' , order)

      },[order])

     

    const value = { 
        order ,
        setOrder
    }
   
    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>


}