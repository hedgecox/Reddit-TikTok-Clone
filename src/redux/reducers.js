import { combineReducers } from "redux";

const Posts = (state = { _loading: false, _error: "" }, action) => {
	switch (action.type) {
		case "GOT_POSTS":
			const key = Object.keys(action.payload)[0];
			return {
				...state,
				_loading: false,
				[key]: { children: [...(state[key]?.children ?? []), ...action.payload[key].children], after: action.payload[key].after },
			};
		case "GET_POSTS":
			return { ...state, _loading: true };
		case "GET_POSTS_ERROR":
			console.log("here");
			return { ...state, _error: action.payload };
		default:
			return state;
	}
};

export default combineReducers({ Posts });
