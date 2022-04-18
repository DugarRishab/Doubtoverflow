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