import * as api from "../../API/api.js";
import { alert } from "../../components/CustomAlert/alert";

export const signup = (authData, navigate) => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_AUTH_REQUEST' });
		const res = await api.signup(authData);
		dispatch({ type: "FETCH_AUTH_SUCCESS", data: res.data.data });
		alert({
			message: `Welcome ${res.data.data.user.name}`,
			type: "success",
		});
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
		alert({ message: `Welcome back ${res.data.data.user.name}`, type: "success" });
		setTimeout(() => {
			navigate("/");
		}, 2000);
		
	} catch (err) {
		alert({ message: err.message, type: "error" });
		dispatch({ type: "FETCH_AUTH_FAILURE" });
	}
};
export const logout = (navigate) => async (dispatch) => {
	try {
		//dispatch({ type: "FETCH_AUTH_REQUEST" });
		const res = await api.logout();
		dispatch({ type: "LOGOUT", data: res.data.data });
		alert({ message: `Logged out successfully`, type: "success" });
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
