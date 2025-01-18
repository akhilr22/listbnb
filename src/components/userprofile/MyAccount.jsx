import React from 'react'
import profilePic from '../../assets/profile_pic.png'
const MyAccount = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
    <div className="flex items-center space-x-4">
      <img src={profilePic} alt="Profile" className="rounded-full w-24 h-24" />
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Cameron Williamson</h2>
        <p className="text-gray-600">Member since 2019</p>
        <div className="text-gray-600">
          <p>📍 Ash Dr. San Jose, South Dakota</p>
          <p>📧 support@xgenious.com</p>
          <p>📞 (480) 555-0103</p>
        </div>
      </div>
      <div className="ml-auto">
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
  )
}

export default MyAccount