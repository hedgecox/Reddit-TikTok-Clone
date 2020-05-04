import { combineReducers } from "redux";

const Posts = (state = {}, action) => {
    switch (action.type) {
        case "GOT_POSTS":
            const [key, value] = Object.entries(action.payload)[0];

            //console.log(key);
            //console.log(value);

            return {
                ...state,
                ...{ [key]: { children: [...(state[key]?.children ?? []), ...action.payload[key].children], after: action.payload[key].after } },
            };
        //return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default combineReducers({ Posts });
