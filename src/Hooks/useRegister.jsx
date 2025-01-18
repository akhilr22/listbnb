import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios';

const useRegister = (postData) => {

    const [register,setRegister] = useState()

        useEffect(()=>{
            (async () => {
                let response = axiosInstance.post('api/advertisements',postData)
            })().catch(err => {
                console.error(err);
            });
        },[])

  return register
  
}

export default useRegister