import React, { useEffect } from 'react'
import AdvertisementCards from './AdvertisementCards'
import {useFetchAdvertisement} from '../../Hooks/useFetchAdvertisement'

const FreshRecommedation = () => {
    const {advertisementData,isLoading}  = useFetchAdvertisement()

  return (
    <section className="py-16">
    <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Fresh Recommendations</h2>
        <p className="text-center text-pink-600">What's New</p>
        <div className="text-center text-gray-600 mb-8">{advertisementData.length} Item(s)</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            !isLoading && advertisementData.map((item,index)=>{
              return  <AdvertisementCards key={item.id} item={item}/>
            })
          }
        </div>
    </div>
</section>
  )
}

export default FreshRecommedation