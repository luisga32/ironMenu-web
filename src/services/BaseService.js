import axios from 'axios';

export const create = (ops = {}) => {
    const http = axios.create( {
        baseURL:'http://localhost:3001/api',
        ...ops
    });

    http.interceptors.response.use(
        response => response.data
    )
    return http
}