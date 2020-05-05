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
			return { ...state, _error: action.payload, _loading: false };
		default:
			return state;
	}
};

const Subs = (state = [], action) => {
	switch (action.type) {
		case "GOT_SUBS":
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({ Posts, Subs });
