import {createContext, useEffect, useState} from 'react';
import { getAccessToken } from '../stores/accessTokenStore';
import { getUserInfo } from '../services/UserService';

export const UserContext = createContext();

export function UserContextProvider({children})  {
    const [user,setUser] = useState(null);
    
    const getUser = () => {
        return getUserInfo().then((response) => setUser(response))
    };

    useEffect(() => {
        if (getAccessToken()) {
            getUser();
        }
    },[]);
    
    const value = {
        getUser,
        user
    }
 
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}