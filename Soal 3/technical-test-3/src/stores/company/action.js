import axios from "axios";
import {
	SET_COMPANIES,
	SET_COMPANY_DETAIL,
	SET_LOADING_FETCH,
	SET_ERROR,
} from "./actionType";
const baseURL = "http://localhost:3001/companies";

export function setCompanies(payload) {
	return {
		type: SET_COMPANIES,
		payload,
	};
}

export function setCompanyDetail(payload) {
	return {
		type: SET_COMPANY_DETAIL,
		payload,
	};
}

export function setLoadingFetch(payload) {
	return {
		type: SET_LOADING_FETCH,
		payload,
	};
}

export function setError(payload) {
	return {
		type: SET_ERROR,
		payload,
	};
}

export function fetchCompanies() {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetch(true));
			const response = await axios.get(baseURL);

			dispatch(setCompanies(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function fetchCompanyDetail(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetch(true));
			const response = await axios.get(`${baseURL}/${payload}`);

			dispatch(setCompanyDetail(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}
