import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import ProductPage from './pages/ProductPage/productPage';
import { User, ShoppingCart } from 'lucide-react';
import LiveChat from './components/liveChat';

function App() {
  return (
    <Router>
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 lg:px-16 shadow-md">
        <div className="text-3xl font-extrabold tracking-wide text-black">
          Made<span className="text-green-400">in</span>Aba
        </div>

        <div className="hidden lg:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products, suppliers..."
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex gap-4 items-center">
          <User className="hover:text-green-400 cursor-pointer" />
          <ShoppingCart className="hover:text-green-400 cursor-pointer" />
        </div>
      </nav>
      {/* Add a navigation bar or links here if needed */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
