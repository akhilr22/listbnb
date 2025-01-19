import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'

const useFetchProfileData = () => {
   const [userProfile,setUserProfile] = useState([])
      const [isLoading,setLoading] =useState(true)
      useEffect(()=>{
          (async () => {
              let response = await axiosInstance.get('api/profile')
              if(response.data){
                setUserProfile(response.data)
              }
              setLoading(false)
          })().catch(err => {
              console.error(err);
          });
          
      },[])
    return {userProfile,isLoading}
}

export default useFetchProfileData