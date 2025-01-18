import React from 'react'
import logo_white from '../../assets/logo_white.png'

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm flex align" >
        <img className="font-bold w-20 " src={logo_white}></img> <span className="text-[#F50963]">|</span> Copyright 2024

        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
