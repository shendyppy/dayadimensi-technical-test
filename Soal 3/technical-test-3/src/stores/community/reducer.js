import {
	SET_ERROR,
	SET_LOADING_FETCH,
	SET_COMMUNITY_DETAIL,
	SET_COMMUNITIES,
	SET_LOADING_FETCH_DETAIL,
} from "./actionType";

const initialState = {
	communities: [],
	communityDetail: [],
	loadingFetch: true,
	loadingFetchDetail: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_COMMUNITIES:
			return { ...state, communities: payload };
		case SET_COMMUNITY_DETAIL:
			return { ...state, communityDetail: payload };
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
