import {create} from './BaseService';

const http= create()

export const getProductsList = () => {

    return http.get('/products')
}