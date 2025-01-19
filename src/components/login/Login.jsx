import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import loginImage from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();  // Get auth state from context

  const onSubmit = async (data) => {
    let loginResponse = await login(data)
    if(loginResponse){
      console.log('Logged in successfully')
    }else{
      alert("something went wrong")
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <section className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg mx-auto mt-16 max-w-5xl w-full">
        <div className="md:w-1/2 p-10">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-gray-800 mb-4">
              list<span className="text-pink-600">bnb</span>
            </div>
            <p className="text-gray-600 mb-6">
              Listbnb, the largest classified listing marketplace, offers perfect ads classifieds...
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Login To Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  placeholder="Type here"
                  {...register('username', { required: 'Username is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
                {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Type here"
                  {...register('password', { required: 'Password is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="md:w-1/2 bg-pink-50 flex items-center justify-center p-10">
          <div className="text-center">
            <img src={loginImage} alt="Illustration" className="mb-8" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Don't Have an Account?</h2>
            <p className="text-gray-600 mb-6">
              To connect with us, please register for a new account if you don't have one already.
            </p>
            <Link to="/register" className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
