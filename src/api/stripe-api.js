import axios from "./axios";

export const createCheckout = (data) => axios.post("/payment/stripe", data);
export const createTransaction = (id) =>
  axios.post(`/payment/transaction?session_id=${id}`);
