import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="text-center py-20 text-white">Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 lg:px-20 lg:py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl w-full object-cover shadow-xl"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-green-400 text-2xl font-semibold mb-2">₦{product.price}</p>
          <p className="text-sm text-gray-300 mb-6">{product.description || 'No description available.'}</p>

          <p className="text-sm text-gray-400 mb-2">
            Supplier: <span className="text-white font-medium">{product.supplier}</span>
          </p>

          {product.tags?.length > 0 && (
            <div className="flex gap-2 mt-4">
              {product.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-yellow-500 text-black text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition">
            Contact Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
