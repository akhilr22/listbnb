import React from 'react'
import profilePic from '../../assets/profile_pic.png'
import useFetchProfileData from '../../Hooks/useFetchProfileData'
import { Link } from 'react-router-dom'
const MyAccount = () => {
  const {userProfile,isLoading} =  useFetchProfileData()

  if(isLoading){
    return <>Loading</>
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
    <div className="flex items-center justify-between space-x-4"> {/* Added justify-between here */}
      <div className="flex items-center space-x-4">
        <img src={profilePic} alt="Profile" className="rounded-full w-24 h-24" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
          <p className="text-gray-600">Member since 2019</p>
         
        </div>
      </div>
      {/* Edit Profile Link */}
      <Link 
        to="/userprofile/profile" 
        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg"
      >
        Edit Profile
      </Link>
    </div>
    <div className="text-gray-600 flex pt-5 gap-x-4">
  <p>📍 Ash Dr. San Jose, South Dakota</p>
  <p>📧 {userProfile.email}</p>
  <p>📞 {userProfile.phone}</p>
</div>
  </div>
  
  )
}

export default MyAccount