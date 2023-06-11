import axios from "./axios";

export const register = (input) => axios.post("/auth/register", input);
export const loginByEmail = (input) => axios.post("/auth/login", input);
export const fetchProfile = () => axios.get("/auth/profile");
