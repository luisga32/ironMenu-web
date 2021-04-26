import {create} from './BaseService';

const http= create()

export const getProductsList = (course) => {

    return http.get('/products', {params : {course : course}})
}

export const getProduct = (id) =>{
    return http.get(`/products/${id}`)
}
