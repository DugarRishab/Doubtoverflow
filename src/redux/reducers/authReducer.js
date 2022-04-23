const initialState = {
	user: null,
	loading: false,
	success: false
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_AUTH_SUCCESS':
			localStorage.setItem('Profile', JSON.stringify({ ...action?.data.user }));
			return { ...state, user: action?.data.user, loading: false, success: true };
		
		case 'FETCH_CURRENT_USER':
			return { ...state, user: action.payload.user };
		
		case 'FETCH_AUTH_REQUEST':
			return { ...state, loading: true };
		
		case 'FETCH_AUTH_FAILURE':
			return { ...state, loading: false, success: false };
		
		case 'LOGOUT':
			localStorage.setItem('Profile', null);
			return { ...state, user: null, loading: false, success: false };
		
		default:
			return state;
	}
}
export default authReducer;