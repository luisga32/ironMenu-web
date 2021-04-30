import { useContext } from 'react';
import {UserContext } from '../contexts/Usercontext';

export const useUser = () => useContext(UserContext);
