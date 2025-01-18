import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
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
              Photo (URL)*
            </label>
            <input
              type="url"
              id="photo"
              {...register('photo', { required: 'Photo URL is required' })}
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
            <label className="block text-lg font-medium mb-2" htmlFor="contactNumber">
              Contact Number*
            </label>
            <input
              type="tel"
              id="contactNumber"
              {...register('contactNumber', {
                required: 'Contact Number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Enter a valid contact number',
                },
              })}
              className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
