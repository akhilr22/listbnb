import { useState, useEffect } from 'react';
import { axiosInstance } from '../utils/axios';
import { useParams } from 'react-router-dom';

export function useFetchProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchProductDetail = async () => {
    setIsLoading(true);
    try {
        
        let response = await axiosInstance.get(`api/advertisements/${id}`)
        if(response.data){
            setProductDetail(response.data)
        }
        setIsLoading(false)
    } catch (error) {
      console.error("Error fetching advertisement data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []); 

  return { productDetail, isLoading };
}
