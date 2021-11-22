import axios from "axios";
import {
	SET_EDUCATIONS,
	SET_EDUCATION_DETAIL,
	SET_LOADING_FETCH,
	SET_LOADING_FETCH_DETAIL,
	SET_ERROR,
} from "./actionType";
const baseURL = "http://localhost:3001/educations";

export function setEducations(payload) {
	return {
		type: SET_EDUCATIONS,
		payload,
	};
}

export function setEducationDetail(payload) {
	return {
		type: SET_EDUCATION_DETAIL,
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

export function fetchEducations() {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetch(true));
			const response = await axios.get(baseURL);

			dispatch(setEducations(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function fetchEducationDetail(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetchDetail(true));
			const response = await axios.get(`${baseURL}/${payload}`);

			dispatch(setEducationDetail(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetchDetail(false));
		}
	};
}
