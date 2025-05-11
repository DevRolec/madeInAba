import axios from 'axios';

export const fetchProducts = async (filters) => {
  const { category, price, keyword } = filters;
  const query = new URLSearchParams({
    category,
    price,
    keyword
  }).toString();

  const res = await axios.get(`/api/products?${query}`);
  return res.data;
};
export const fetchProductById = async (id) => {
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
};