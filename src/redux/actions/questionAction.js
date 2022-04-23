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
		
		dispatch({ type: "POST_ANSWER", payload: res.data.data });
		dispatch(getAllQuestions({}));
	}
	catch (err) {
		alert({ message: err.message, type: "error" });
	}
}
export const deleteQuestion = (id, navigate) => async (dispatch) => {
	try {
		await api.deleteQuestion(id);
		alert({ message: "Question successfully deleted", type: "success" });
		navigate("/");
		dispatch({ type: "DELETE_QUESTION" });
	}
	catch (err) {
		alert({ message: err.message, type: "error" });
	}
}
export const deleteAnswer = (questionId, answerId) => async (dispatch) => {
	try {
		await api.deleteAnswer(questionId, answerId);
		alert({ message: "Answer successfully deleted", type: "success" });
		// window.location.reload();
		
		dispatch({ type: "DELETE_ANSWER" });
		dispatch(getAllQuestions({}));
	}
	catch(err){
		alert({ message: err.message, type: "error" });
	}
}
export const voteQuestion = (vote, id) => async (dispatch) => {
	try {
		console.log("vote", vote);
		await api.voteQuestion(vote, id);
		// window.location.reload();
		dispatch({ type: "VOTE_QUESTION" });
		dispatch(getAllQuestions({}));
	} catch (err) {
		alert({ message: err.message, type: "error" });
	}
}