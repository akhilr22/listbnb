import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../utils/axios';
import { useFetchAdvertisement } from '../../Hooks/useFetchAdvertisement';

const EditAd = ({item,setEditContainerOpen}) => {
     const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm();

        const {refetch}  = useFetchAdvertisement()
      


      useEffect(()=>{
        if(item){
            setValue('title',item.title)
            setValue('description',item.description)
            setValue('image',item.image)
            setValue('price',item.price)
        }
      },[])


      const onSubmit = (data) => {
          let reqData = {
              "title": data.title,       
              "price": parseFloat(data.price),        
              "description": data.description,
              "image": data.image,
              'id' : item.id
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

        const deleteAd = ()=>{
            try {
                const createAdResponse = axiosInstance.delete(`/api/advertisements/${item.id}`)
                if(createAdResponse){
                    setEditContainerOpen()
                  reset()
                  refetch()
                  alert('Ad created successfully ')
                }
            } catch (error) {
              alert('Oops, Something went wrong')
            }
        }
      
  return (
      <main className="bg-white shadow rounded-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-6">Edit Ad</h2>
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
            <div className="flex items-center space-x-4 justify-end w-full">
            <button type="submit" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg" onClick={deleteAd}>Remove</button>
            <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">Save</button>
            </div>
            
          </form>
        </main>


  )
}

export default EditAd