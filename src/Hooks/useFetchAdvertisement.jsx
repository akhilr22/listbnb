import { useState, useEffect } from 'react';
import { axiosInstance } from '../utils/axios';

export function useFetchAdvertisement() {
  const [advertisementData, setAdvertisementData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAdvertisement = async () => {
    setIsLoading(true);
    try {
        let response = await axiosInstance.get('api/advertisements')
        if(response.data){
            setAdvertisementData(response.data)
        }
        setIsLoading(false)
    } catch (error) {
      console.error("Error fetching advertisement data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvertisement();
  }, []); 

  return { advertisementData, isLoading, refetch: fetchAdvertisement };
}
