import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Aba Quality Shoes",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262d34?auto=format&fit=crop&w=800&q=80",
    supplier: "Supreme Leather Ltd",
    supplierId: "supreme-leather",
    category: "Fashion",
    price: 2500
  },
  {
    id: 2,
    name: "Custom Ankara Bags",
    image: "https://images.unsplash.com/photo-1592878849129-58c2f9e45f47?auto=format&fit=crop&w=800&q=80",
    supplier: "Ankara Express",
    supplierId: "ankara-express",
    category: "Accessories",
    price: 1800
  },
  {
    id: 3,
    name: "Handmade Denim",
    image: "https://images.unsplash.com/photo-1618354691413-6f6beccbe7a7?auto=format&fit=crop&w=800&q=80",
    supplier: "Denim Dynasty",
    supplierId: "denim-dynasty",
    category: "Fashion",
    price: 3200
  }
];

export default function HeroPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleProductClick = (supplierId) => {
    navigate(`/suppliers/${supplierId}`);
  };

  const filteredProducts = products.filter((product) => {
    const inCategory = selectedCategory === "All" || product.category === selectedCategory;
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col">
    
      {/* Filters */}
      <div className="px-6 lg:px-16 py-6 bg-gray-800 flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div>
          <label className="mr-2">Category:</label>
          <select
            className="bg-gray-700 text-white rounded px-3 py-2"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="All">All</option>
            <option value="Fashion">Fashion</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Price Range:</label>
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-48"
          />
          <span className="ml-2">Up to ₦{priceRange[1]}</span>
        </div>
      </div>

      {/* Product Listing */}
      <section className="px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Product Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
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
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-400">by {product.supplier}</p>
              <p className="text-sm text-green-400 font-bold">₦{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
