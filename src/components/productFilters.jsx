const ProductFilters = ({ filters, onChange }) => {
    return (
      <div className="space-y-4">
        <select onChange={e => onChange({ ...filters, category: e.target.value })}>
          <option value="">All Categories</option>
          <option value="Fashion">Fashion</option>
          <option value="Accessories">Accessories</option>
        </select>
  
        <input
          type="range"
          min="0"
          max="10000"
          value={filters.price}
          onChange={(e) => onChange({ ...filters, price: e.target.value })}
        />
        <span>Up to ₦{filters.price}</span>
  
        <input
          type="text"
          placeholder="Search by keyword"
          value={filters.keyword}
          onChange={(e) => onChange({ ...filters, keyword: e.target.value })}
        />
      </div>
    );
  };
  export default ProductFilters;
  