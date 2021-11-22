import axios from "axios";
import {
	SET_COMMUNITIES,
	SET_COMMUNITY_DETAIL,
	SET_LOADING_FETCH,
	SET_ERROR,
	SET_LOADING_FETCH_DETAIL,
} from "./actionType";
const baseURL = "http://localhost:3001/communities";

export function setCommunities(payload) {
	return {
		type: SET_COMMUNITIES,
		payload,
	};
}

export function setCommunityDetail(payload) {
	return {
		type: SET_COMMUNITY_DETAIL,
		payload,
	};
}

export function setLoadingFetch(payload) {
	return {
		type: SET_LOADING_FETCH,
		payload,
	};
}

export function setLoadingFetchDetail(payload) {
	return {
		type: SET_LOADING_FETCH_DETAIL,
		payload,
	};
}

export function setError(payload) {
	return {
		type: SET_ERROR,
		payload,
	};
}

export function fetchCommunity() {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetch(true));
			const response = await axios.get(baseURL);

			dispatch(setCommunities(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function fetchCommunityDetail(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetchDetail(true));
			const response = await axios.get(`${baseURL}/${payload}`);

			dispatch(setCommunityDetail(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetchDetail(false));
		}
	};
}
