import React, { createContext, useState, useContext, useEffect } from 'react';
import { axiosInstance } from '../utils/axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData,setUserData] = useState({})

  const login = async (userData) => {
    if(userData){
        let reqBody ={
            "identifier": userData.username,
            "password": userData.password     
          }
          let loginResponse = await axiosInstance.post('api/auth/local',reqBody);
          if(loginResponse?.data?.user){
            localStorage.setItem('userData', JSON.stringify(loginResponse?.data?.user));
            setUserData(loginResponse?.data?.user)
            setIsAuthenticated(true);
            Cookies.set('token', loginResponse?.data?.jwt, { expires: 7, path: '' });
            return true
          }else{
            return false
          }
    }else{
        return false
    }
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    Cookies.remove('token');
  };

  const register = (userData) => {
    
  };

  useEffect(()=>{
    let userData =  localStorage.getItem('userData') ?  JSON.parse(localStorage.getItem('userData')) : "";
    if(userData){
        setIsAuthenticated(true)
        setUserData(userData)
    }
  },[])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login,register,logout,userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);