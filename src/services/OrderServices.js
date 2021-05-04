import {create } from './BaseService';

const http = create();

export const createOrder = (order) => {

    return http.post('/orders', order)
}

export const getOrdersList = (userId) => {
    console.log(' get Order List')

    return http.get('/users/me/orders')
};

export const getOrder = ( id) =>{

    return http.get(`/users/me/orders/${id}`)
}