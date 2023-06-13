import axios from "./axios";

export const addProduct = (input) => axios.post("admin/product", input);
export const getProduct = async () => axios.get("admin/product");
