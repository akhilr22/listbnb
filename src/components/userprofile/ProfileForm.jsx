import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useFetchProfileData from '../../Hooks/useFetchProfileData';
import { axiosInstance } from '../../utils/axios';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const {userProfile,isLoading} =  useFetchProfileData()

  useEffect(()=>{
    if(!isLoading){
      setValue("firstName", userProfile.firstName)
      setValue("lastName", userProfile.lastName)
      setValue("email", userProfile.email)
      setValue("username", userProfile.username)
      setValue("location", userProfile.location)
      setValue("phone", userProfile.phone)

    }
  },[userProfile])

  const onSubmit = async (data) => {
    try {
     let response = await axiosInstance.put('api/profile',data)
     if(response.data){
      alert('Success')
     }
    } catch (error) {
      alert('something went wrong')
    }
    console.log(data);
  };

  return (
    <div className="bg-white p-12 rounded shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="firstName">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'Frist Name is required' })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="lastName">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Name is required' })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="username">
              Username*
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="photo">
              Photo (URL)
            </label>
            <input
              type="url"
              id="photo"
              {...register('photo')}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="location">
              Location*
            </label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location is required' })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="phone">
              Contact Number*
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                required: 'Contact Number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Enter a valid contact number',
                },
              })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Save
          </button>
        </form>
      </div>
  );
};

export default ProfileForm;
