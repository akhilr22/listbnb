import React, { createContext, useState, useContext, useEffect } from 'react';
import { axiosInstance } from '../utils/axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData,setUserData] = useState({})
  const [isLoading,setLoading] = useState(true)

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
            setLoading(false)
            return true
          }else{
          setLoading(false)
            return false
          }
    }else{
      setLoading(false)
        return false
    }
  };

  const logout = () => {
    localStorage.removeItem('userData');
    Cookies.remove('token');
    setIsAuthenticated(false);
  };

  const registerAndLogin = async(userData) => {
     try {
      let response = await axiosInstance.post('api/auth/local/register',userData)
      if(response.data?.user){
        localStorage.setItem('userData', JSON.stringify(response?.data?.user));
        setUserData(response?.data?.user)
        setIsAuthenticated(true);
        Cookies.set('token', response?.data?.jwt, { expires: 7, path: '' });
        setLoading(false)
        return true
      }
      } catch (error) {
        alert("Email or Username are already taken", error)
      }
  };

  useEffect(()=>{
    let userData =  localStorage.getItem('userData') ?  JSON.parse(localStorage.getItem('userData')) : "";
    if(userData){
        setIsAuthenticated(true)
        setUserData(userData)
    }
    setLoading(false)
  },[])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login,registerAndLogin,logout,userData,isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);