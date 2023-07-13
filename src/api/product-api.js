import axios from "./axios";

export const getProduct = () => axios.get("/product");
export const getProductItem = (id) => axios.get(`/product/${id}`);
export const getProductSearch = (data) => {
  return axios.get(`/search/${data || 0}`);
};
