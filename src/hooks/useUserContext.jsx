import { useContext } from 'react';
import {UserContext } from '../contexts/Usercontext';

export const useUserContext = () => useContext(UserContext);
