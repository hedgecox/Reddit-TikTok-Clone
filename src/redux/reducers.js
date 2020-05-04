import { combineReducers } from "redux";

const Posts = (state = {}, action) => {
	switch (action.type) {
		case "GOT_POSTS":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default combineReducers({ Posts });
