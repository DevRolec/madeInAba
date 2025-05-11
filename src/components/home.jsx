import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Aba Quality Shoes",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262d34?auto=format&fit=crop&w=800&q=80",
    supplier: "Supreme Leather Ltd",
    supplierId: "supreme-leather"
  },
  {
    id: 2,
    name: "Custom Ankara Bags",
    image: "https://images.unsplash.com/photo-1592878849129-58c2f9e45f47?auto=format&fit=crop&w=800&q=80",
    supplier: "Ankara Express",
    supplierId: "ankara-express"
  },
  {
    id: 3,
    name: "Handmade Denim",
    image: "https://images.unsplash.com/photo-1618354691413-6f6beccbe7a7?auto=format&fit=crop&w=800&q=80",
    supplier: "Denim Dynasty",
    supplierId: "denim-dynasty"
  },
  {
    id: 1,
    name: "Aba Quality Shoes",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262d34?auto=format&fit=crop&w=800&q=80",
    supplier: "Supreme Leather Ltd",
    supplierId: "supreme-leather"
  },
  {
    id: 2,
    name: "Custom Ankara Bags",
    image: "https://images.unsplash.com/photo-1592878849129-58c2f9e45f47?auto=format&fit=crop&w=800&q=80",
    supplier: "Ankara Express",
    supplierId: "ankara-express"
  },
  {
    id: 3,
    name: "Handmade Denim",
    image: "https://images.unsplash.com/photo-1618354691413-6f6beccbe7a7?auto=format&fit=crop&w=800&q=80",
    supplier: "Denim Dynasty",
    supplierId: "denim-dynasty"
  }
];

export default function HeroPage() {
  const navigate = useNavigate();

  const handleProductClick = (supplierId) => {
    navigate(`/suppliers/${supplierId}`);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col">
  
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
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

      {/* Product Listing */}
      <section className="px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.supplierId)}
              className="bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-400">by {product.supplier}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}