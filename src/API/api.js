import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({ baseURL: "http://localhost:8000/api/v1" });

export const login = (authData) => api.post("/users/login", authData);
export const signup = (authData) => api.post("/users/signup", authData);
