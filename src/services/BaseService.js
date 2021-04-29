import axios from 'axios';
import { getAccessToken } from '../stores/accessTokenStore';

// add url to heroku pending
export const create = (ops = {}) => {
    const http = axios.create( {
        baseURL:'http://localhost:3001/api',
        ...ops
    });

    http.interceptors.request.use( request => {
        if (ops.useAccessToken !== false) {
            request.headers.common.Authorization = `Bearer ${getAccessToken()}`;
        } else {
            delete request.headers.common.Authorization;
        }
        return request;
    })

    http.interceptors.response.use(
        response => response.data
    );
    return http;
}