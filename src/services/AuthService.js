import {create} from './BaseService';

const http= create({
    userAccessToken: false
})


export const login = (body) =>{
//    console.log('login body: ' , body);
    return http.post('/login', body)
}

