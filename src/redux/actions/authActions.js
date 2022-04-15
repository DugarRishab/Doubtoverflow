import * as api from "../../API/api.js";

export const signupAction = (authData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.signup(authData);
		dispatch({ type: "AUTH", data });
		//navigate("/");
	} catch (err) {}
};
export const loginAction = (authData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.login(authData);
		dispatch({ type: "AUTH", data });
		console.log(data);
		//navigate("/");
	} catch (err) {}
};
