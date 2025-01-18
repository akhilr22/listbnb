import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../utils/axios";

const PostAd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    let reqData = {
        "title": data.title,       
        "price": parseFloat(data.price),        
        "description": data.description,
        "image": data.image
      }
      try {
          const createAdResponse = axiosInstance.post('/api/advertisements',{...reqData})
          if(createAdResponse){
            reset()
            alert('Ad created successfully ')
          }
      } catch (error) {
        alert('Oops, Something went wrong')
      }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navbar */}
      {/* Main Content */}
      <main className="w-full lg:w-3/4 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Post Ad</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Ad Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Ad title is required" })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                {...register("description", { required: "Description is required" })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="Price" className="block text-gray-700 font-medium mb-2">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="Price"
                {...register("price", { required: "Price is required" })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.Price ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.price.message}</p>}
            </div>

            {/* Photos */}
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                Photos<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="image"
                {...register("image", { required: "Image URL is required" })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.image ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
            >
              Post
            </button>
          </form>
        </main>

     
    </div>
  );
};

export default PostAd
