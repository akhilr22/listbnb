import React from 'react';
import { useFetchProductDetail } from '../../Hooks/useFetchProductDetail';

const ProductDetail = () => {
  const {productDetail,isLoading} = useFetchProductDetail()

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">{productDetail.title}</h2>
            <p className="text-gray-600 mb-4">New York, United States | Nov 01, 2023, 10:00am</p>
            <div className="mb-4">
  <img
    src={productDetail.image}
    alt="MacBook"
    className="rounded-lg w-full max-h-96 object-contain"
  />
</div>

          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <p className="text-lg font-bold text-red-600">Price: ${productDetail.price}</p>
              <div className="mt-4">
                <h3 className="text-lg font-medium">Astonix D. Dowson</h3>
                <p className="text-gray-500">Member since Nov 24, 2020</p>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="material-icons text-blue-500">phone</span>
                    <p className="ml-2">+88XXXXXXXXXX</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="material-icons text-red-500">email</span>
                    <p className="ml-2">info@xxxxxxxxxx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Overview</h3>
          <p className="text-gray-700 mt-4">
            {productDetail.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500">
        <p>listbnb | Copyright 2024</p>
      </footer>
    </div>
  );
};

export default ProductDetail;
