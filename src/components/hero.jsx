import React from 'react'

const hero = () => {
  return (
    <div>
  
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col">
    

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12 flex-1">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Discover Quality <span className="text-green-400">Products</span> From Aba
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-300">
            Connect with verified manufacturers, source innovative designs, and trade securely from Africa's industrial hub.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1576267423445-d1b5e2631f8e?auto=format&fit=crop&w=800&q=80"
            alt="Made in Aba"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="block lg:hidden p-4">
        <input
          type="text"
          placeholder="Search products, suppliers..."
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  </div>
  )
}   
 

export default hero
