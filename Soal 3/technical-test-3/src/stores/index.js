import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import communityReducer from "./community/reducer";
import companyReducer from "./company/reducer";
import educationReducer from "./education/reducer";

const store = createStore(
	combineReducers({
		community: communityReducer,
		company: companyReducer,
		education: educationReducer,
	}),
	applyMiddleware(thunk)
);

export default store;
