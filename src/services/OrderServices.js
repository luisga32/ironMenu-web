import {create } from './BaseService';

const http = create();

export const createOrder = (order) => {

    return http.post('/orders', order)
}