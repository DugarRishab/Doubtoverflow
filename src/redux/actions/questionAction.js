import * as api from "../../API/api.js";

export const askQuestion = (question, navigate) => async (dispatch) => {
	try {
		const res = await api.askQuestion(question);
		dispatch({ type: "ASK_QUESTION", payload: res.data.data });
		navigate('/');
	}
	catch (err) {
		
	}
}
export const getAllQuestions = (queries) => async (dispatch) => {
	try {
		const res = await api.getAllQuestions(queries);
		console.log(res.data);
		dispatch({ type: "GET_ALL_QUESTIONS", payload: res.data.data });
		
	} catch (err) {}
}
export const postAnswer = (answerBody, id) => async (dispatch) => {
	console.log(answerBody, typeof answerBody);
	try {
		const res = await api.postAnswer(answerBody, id);
		console.log(res.data);
		dispatch({ type: "POST_ANSWER", payload: res.data.data });
	}
	catch (err) {
		
	}
}