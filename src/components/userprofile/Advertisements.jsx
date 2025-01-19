import React, { useState } from 'react'
import {useFetchAdvertisement} from '../../Hooks/useFetchAdvertisement'
import EditAd from './EditAd'
import { Link } from 'react-router-dom'

const Advertisements = () => {
  const {advertisementData,isLoading}  = useFetchAdvertisement()
  const [editContainerOpen,setEditContainerOpen] = useState()

  const editAd =(id)=>{
    setEditContainerOpen(id)
  }
  return (
    <div className="space-y-6">
      {
        !isLoading && advertisementData.map((item)=>{
          return <React.Fragment key={item.id}>
          <div className="bg-white shadow rounded-lg p-6 flex"  >
          <img src={item.image} alt="Ad" className="w-32 h-32 rounded-lg" />
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-xl font-bold text-gray-800">${item.price}</p>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <Link to={`/advertisements/${item.id}`}>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                View
              </button>
            </Link>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg" onClick={()=>editAd(item.id)}>
              Edit Ad
            </button>
          </div>
        </div>
          {
            editContainerOpen === item.id &&<EditAd item={item} setEditContainerOpen={setEditContainerOpen}/>
          }   
        </React.Fragment>
        })
      }
   

   
  </div>
  )
}

export default Advertisements