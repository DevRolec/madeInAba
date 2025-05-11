import React from "react";



const ProductCard = ({ product }) => (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.supplier}</p>
      <p className="text-green-600 font-semibold mt-1">₦{product.price}</p>
      {product.tags.includes("new") && (
        <span className="text-xs bg-yellow-400 px-2 py-1 rounded mt-2 inline-block">New</span>
      )}
    </div>
  );
  export default ProductCard;
  