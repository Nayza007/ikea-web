import axios from "./axios";

export const addProduct = (input) => axios.post("admin/product", input);
export const getProduct = () => axios.get("admin/fetch");
export const deleteCart = (id) => axios.delete(`admin/delete/${id}`);
export const updateProduct = (product) => axios.patch("admin/update/", product);
export const getTransaction = () => axios.get("admin/transaction");
export const deleteOrder = (id) => axios.delete(`admin/transaction/${id}`);
export const updateStatusDelivery = (id) =>
  axios.patch(`admin/transaction/${id}`);
