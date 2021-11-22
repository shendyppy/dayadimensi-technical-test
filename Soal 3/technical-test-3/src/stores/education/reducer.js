import {
	SET_ERROR,
	SET_LOADING_FETCH,
	SET_EDUCATION_DETAIL,
	SET_EDUCATIONS,
} from "./actionType";

const initialState = {
	educations: [],
	educationDetail: [],
	loadingFetch: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_EDUCATIONS:
			return { ...state, educations: payload };
		case SET_EDUCATION_DETAIL:
			return { ...state, educationDetail: payload };
		case SET_LOADING_FETCH:
			return { ...state, loadingFetch: payload };
		case SET_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default reducer;
