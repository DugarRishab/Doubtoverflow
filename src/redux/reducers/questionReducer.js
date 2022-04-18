const initialState = {
	allQuestions: [],
	questionAsked: [],
}

const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ASK_QUESTION':
			return { ...state, questionAsked: state.questionAsked.push(action.payload.question) };
		default:
			return state;
	}
}

export default questionReducer;