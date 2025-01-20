import React from 'react'
import bannerImage from '../../assets/banner.svg'
                                         
const Banner = () => {
  return (
<section className="bg-gray-100 py-16 ">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="relative w-full max-w-8xl">
                        <img src={bannerImage} alt="Hero" className="rounded-lg w-full "/>
                    </div>
                </div>
            </section>
  )
}

export default Banner