import { useEffect, useState } from 'react';
import ProductGrid from '../../components/productGrid';
import ProductFilters from '../../components/productFilters';
import { fetchProducts } from '../../services/productService';

const ProductsPage = () => {
  const [filters, setFilters] = useState({ category: '', price: 10000, keyword: '' });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(filters).then(setProducts);
  }, [filters]);

  return (
    <div className="px-4 py-8 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <ProductFilters filters={filters} onChange={setFilters} />
        </div>
        <div className="lg:w-3/4">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
