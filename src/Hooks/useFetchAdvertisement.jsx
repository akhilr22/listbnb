import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'

const useFetchAdvertisement = () => {

    const [advertisementData,setAdvertisementData] = useState([])
    const [isLoading,setLoading] =useState(true)
    useEffect(()=>{
        (async () => {
            let response = await axiosInstance.get('api/advertisements')
            if(response.data){
                setAdvertisementData(response.data)
            }
            setLoading(false)
        })().catch(err => {
            console.error(err);
        });
        
    },[])
  return {advertisementData,isLoading}
}

export default useFetchAdvertisement