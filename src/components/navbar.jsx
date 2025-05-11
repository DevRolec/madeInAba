import { useState } from "react";
import { Menu, ShoppingCart, User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wider">
        <span className="text-red-500">Made</span><span className="text-white">Hub</span>
      </div>

      {/* Search */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search products, suppliers..."
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-red-500"
        />
      </div>

      {/* Navigation & Icons */}
      <div className="flex items-center gap-6">
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-red-400 transition">
            Categories <ChevronDown size={16} />
          </button>
          <div className="absolute hidden group-hover:block top-full mt-2 bg-white text-black p-4 rounded-md shadow-xl w-48">
            <ul>
              <li className="hover:bg-gray-100 px-2 py-1 rounded">Machinery</li>
              <li className="hover:bg-gray-100 px-2 py-1 rounded">Electronics</li>
              <li className="hover:bg-gray-100 px-2 py-1 rounded">Apparel</li>
              <li className="hover:bg-gray-100 px-2 py-1 rounded">More...</li>
            </ul>
          </div>
        </div>

        <a href="/deals" className="hover:text-red-400">Deals</a>
        <a href="/support" className="hover:text-red-400">Support</a>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <User className="cursor-pointer hover:text-red-400" />
          <ShoppingCart className="cursor-pointer hover:text-red-400" />
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer hover:text-red-400"
          />
        </div>
      </div>
    </nav>
  );
}
