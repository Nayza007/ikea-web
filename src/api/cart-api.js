import axios from "./axios";

export const addProductToCart = (productId) =>
  axios.post("/cart/createCart", productId);
export const getCart = () => axios.get("/cart/fetch");
export const updateProductToCart = (cart) =>
  axios.patch("/cart/updateCart", cart);
export const deleteOrder = (id) => axios.delete(`/cart/deleteOrder/${id}`);
