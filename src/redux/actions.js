export const getPosts = (sub, after) => {
	return async (dispatch) => {
		fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=10${after ? "&after=" + after : ""}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "GOT_POSTS", payload: { [sub]: { children: data.data.children, after: data.data.after } } });
			});
	};
};
