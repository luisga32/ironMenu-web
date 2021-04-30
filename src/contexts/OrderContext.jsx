import {createContext, useState } from 'react';

export  const OrderContext = createContext()

export function OrderContextProvider ({children}){

    const [order, setOrder] = useState(null)

//  function that update order everytime click on a dish
     

    const value = { 
        order : order,
        setOrder: setOrder
    }
   
    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>


}