export const getPosts = (sub, after) => {
	return async (dispatch, getState) => {
		//Return Early if already Requesting
		if (getState().Posts._loading || getState().Posts._error) return;

		dispatch({ type: "GET_POSTS" });

		fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=10${after ? "&after=" + after : ""}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "GOT_POSTS", payload: { [sub]: { children: data.data.children, after: data.data.after } } });
			})
			.catch((err) => {
				dispatch({ type: "GET_POSTS_ERROR", payload: "Sorry, There was a problem trying to get the data from Reddit" });
			});
	};
};

export const getSubs = (query) => {
	return async (dispatch) => {
		fetch(`https://www.reddit.com/r/all/search.json?type=sr&q=${query}&limit=15`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "GOT_SUBS", payload: data.data.children });
			})
			.catch(() => {});
	};
};
