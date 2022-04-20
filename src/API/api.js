import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({ baseURL: "http://localhost:8000/api/v1" });

export const login = (authData) => api.post("/users/login", authData);
export const signup = (authData) => api.post("/users/signup", authData);
export const askQuestion = (question) => api.post("/questions/", question);
export const getAllQuestions = (queries) => api.get(`/questions?page=${queries.page}&size=${queries.size}&tab=${queries.sort}`);
