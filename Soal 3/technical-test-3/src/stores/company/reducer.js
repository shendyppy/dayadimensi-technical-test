import {
	SET_ERROR,
	SET_LOADING_FETCH,
	SET_COMPANY_DETAIL,
	SET_COMPANIES,
	SET_LOADING_FETCH_DETAIL,
} from "./actionType";

const initialState = {
	companies: [],
	companyDetail: [],
	loadingFetch: true,
	loadingFetchDetail: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_COMPANIES:
			return { ...state, companies: payload };
		case SET_COMPANY_DETAIL:
			return { ...state, companyDetail: payload };
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
