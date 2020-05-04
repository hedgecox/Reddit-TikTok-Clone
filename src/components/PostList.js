import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";

import Post from "./Post";
import Loading from "./Loading";

const PostContainer = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: 100vh;
`;

const PostList = () => {
	// http://web.uforio.com/#r/cat
	const postContainerRef = useRef(null);
	const [items, SetItems] = useState([]);
	console.log("Postlist Loaded");

	useEffect(() => {
		fetch("https://www.reddit.com/r/EarthPorn/hot.json?limit=10")
			.then((res) => res.json())
			.then((data) => {
				SetItems(data);
			});
	}, []);

	if (!items.data) {
		return (
			<PostContainer>
				<Loading />
			</PostContainer>
		);
	}

	const scrollStop = () => {
		const { scrollTopMax, scrollTop, clientHeight } = postContainerRef.current;
		console.log("scrollHeight", scrollTopMax);
		console.log("SCrollTop", scrollTop);
		console.log("clientHeight:", clientHeight);

		console.log("Currently On:", scrollTop / clientHeight);
		console.log("ItemsLeft:", (scrollTopMax - scrollTop) / clientHeight);
	};

	console.log(items.data.children);
	return (
		<PostContainer onScroll={debounce(scrollStop, 80)} ref={postContainerRef}>
			{items.data.children
				.filter((i) => i.data.post_hint === "image")
				.map(({ kind, data: { id, title, thumbnail, url, ups, num_comments } }) => {
					return <Post key={id} title={title} thumbnail={thumbnail} url={url} ups={ups} num_comments={num_comments} />;
				})}
		</PostContainer>
	);
};

export default PostList;
