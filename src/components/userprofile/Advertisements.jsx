import React from 'react'
import useFetchAdvertisement from '../../Hooks/useFetchAdvertisement'

const Advertisements = () => {
  const {advertisementData,isLoading}  = useFetchAdvertisement()

  return (
    <div className="space-y-6">
      {
        !isLoading && advertisementData.map((item)=>{
          return  <div className="bg-white shadow rounded-lg p-6 flex" key={item.id} >
          <img src={item.image} alt="Ad" className="w-32 h-32 rounded-lg" />
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-xl font-bold text-gray-800">${item.price}</p>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
              View
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
              Edit Ad
            </button>
          </div>
        </div>
        })
      }
   

   
  </div>
  )
}

export default Advertisements