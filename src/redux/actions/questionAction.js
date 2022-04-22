import * as api from "../../API/api.js";
import { alert } from "../../components/CustomAlert/alert";

export const askQuestion = (question, navigate) => async (dispatch) => {
	try {
		const res = await api.askQuestion(question);
		dispatch({ type: "ASK_QUESTION", payload: res.data.data });
		navigate('/');
	}
	catch (err) {
		alert({ message: err.message, type: "error" });
	}
}
export const getAllQuestions = (queries) => async (dispatch) => {
	try {
		const res = await api.getAllQuestions(queries);
		// console.log(res.data);
		dispatch({ type: "GET_ALL_QUESTIONS", payload: res.data.data });
		
	} catch (err) {
		alert({ message: err.message, type: "error" });
	}
}
export const postAnswer = (answerBody, id) => async (dispatch) => {
	
	try {
		const res = await api.postAnswer(answerBody, id);
		window.location.reload();
		dispatch({ type: "POST_ANSWER", payload: res.data.data });
	}
	catch (err) {
		alert({ message: err.message, type: "error" });
	}
}