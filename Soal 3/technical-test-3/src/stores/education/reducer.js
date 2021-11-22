import {
	SET_ERROR,
	SET_LOADING_FETCH,
	SET_EDUCATION_DETAIL,
	SET_EDUCATIONS,
	SET_LOADING_FETCH_DETAIL,
} from "./actionType";

const initialState = {
	educations: [],
	educationDetail: [],
	loadingFetch: true,
	loadingFetchDetail: true,
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
		case SET_LOADING_FETCH_DETAIL:
			return { ...state, loadingFetchDetail: payload };
		case SET_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default reducer;
