import React from 'react'
import { Link } from 'react-router-dom'

const AdvertisementCards = ({item}) => {
  return (
    <Link to={`/advertisements/${item.id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={item.image} alt="Product" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="text-pink-600 font-bold text-lg">${item.price}</div>
                    </div>
                </div>
                </Link>
  )
}

export default AdvertisementCards