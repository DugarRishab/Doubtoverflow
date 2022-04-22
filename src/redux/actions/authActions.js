import * as api from "../../API/api.js";
import { alert } from "../../components/CustomAlert/alert";

export const signup = (authData, navigate) => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_AUTH_REQUEST' });
		const res = await api.signup(authData);
		dispatch({ type: "FETCH_AUTH_SUCCESS", data: res.data.data });
		navigate("/");
	} catch (err) {
		alert({ message: err.message, type: "error" });
		dispatch({ type: "FETCH_AUTH_FAILURE" });
	}
};
export const login = (authData, navigate) => async (dispatch) => {
	try {
		dispatch({ type: "FETCH_AUTH_REQUEST" });
		const res = await api.login(authData);
		dispatch({ type: "FETCH_AUTH_SUCCESS", data: res.data.data });
		//console.log(data);
		setTimeout(() => {
			navigate("/");
		}, 2000);
		
	} catch (err) {
		alert({ message: err.message, type: "error" });
		dispatch({ type: "FETCH_AUTH_FAILURE" });
	}
};
export const setCurrentUser = (user) => (dispatch) => {
	dispatch({ type: "FETCH_CURRENT_USER", payload: { user } });
}
