import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
	baseURL: "https://doubt-overflow-api.herokuapp.com/api/v1",
});

export const login = (authData) => api.post("/users/login", authData);
export const signup = (authData) => api.post("/users/signup", authData);
export const logout = () => api.get("/users/logout");
export const askQuestion = (question) => api.post("/questions/", question);
export const getAllQuestions = (queries) => api.get(`/questions?page=${queries.page || 1}&size=${queries.size || ""}&tab=${queries.sort || ""}&tag=${queries.tag || ""}`);
export const postAnswer = (answerBody, id) => api.post(`/questions/${id}/answer/`, { answerBody });
export const deleteQuestion = (id) => api.delete(`/questions/${id}`);
export const deleteAnswer = (questionId, answerId) => api.delete(`/questions/${questionId}/answer/${answerId}`);
export const voteQuestion = (vote, id) => api.patch(`/questions/${id}/vote/${vote}`);
export const voteAnswer = (vote, questionId, answerId) => api.patch(`/questions/${questionId}/answer/${answerId}/vote/${vote}`);