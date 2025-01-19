import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import loginImage from '../../assets/login.png'

const Register = () => {
    const { register, handleSubmit, formState: { errors } ,watch } = useForm();
    const { registerAndLogin } = useAuth(); 
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            let reqData = {
                email : data.email,
                password:data.password,
                username:data.username
            } 
            await registerAndLogin(reqData)
            navigate('/')
        } catch (error) {
            alert("Email or Username are already taken")
        }

        
    };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    {/* Header */}
    

    {/* Registration Section */}
    <section className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg mx-auto mt-16 max-w-5xl w-full">
        <div className="md:w-1/2 p-10">
            <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-gray-800 mb-4">list<span className="text-pink-600">bnb</span></div>
                <p className="text-gray-600 mb-6">Listbnb, the largest classified listing marketplace, offers perfect ads classifieds...</p>
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Create Your Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            placeholder="Type here"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Username</label>
                        <input
                            type="text"
                            {...register('username', { required: 'Username is required' })}
                            placeholder="Type here"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            {...register('password', { 
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' }
                            })}
                            placeholder="Type here"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            {...register('confirmPassword', {
                                required: 'Confirm Password is required',
                                validate: value => value === watch('password') || 'Passwords do not match'
                            })}
                            placeholder="Type here"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">Register</button>
                </form>
            </div>
        </div>

        <div className="md:w-1/2 bg-pink-50 flex items-center justify-center p-10">
            <div className="text-center">
                <img src={loginImage} alt="Illustration" className="mb-8" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Already Have an Account?</h2>
                <p className="text-gray-600 mb-6">To connect with us, please login to our account if you are having one already.</p>
                <Link to={'/'} className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">Login</Link>
            </div>
        </div>
    </section>

   
</div>
  )
}

export default Register