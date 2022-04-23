const initialState = {
	allQuestions: [],
	questionAsked: [],
}

const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ASK_QUESTION':
			return { ...state};
		case 'GET_ALL_QUESTIONS':
			return { ...state, allQuestions: action.payload.questions }
		case 'POST_ANSWER':
			return { ...state };
		case 'DELETE_QUESTION':
			return { ...state };
		case 'DELETE_ANSWER':
			return { ...state };
		case 'VOTE_QUESTION':
			return { ...state };

		default:
			return state;
	}
}


export default questionReducer;