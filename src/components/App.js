import React, { useEffect, useState } from "react";
import Post from "./Post";
import styled from "styled-components";

const PostContainer = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: 100vh;
`;

const App = () => {
	// http://web.uforio.com/#r/cat
	const [items, SetItems] = useState([]);

	useEffect(() => {
		fetch("https://www.reddit.com/r/catgifs/hot.json?limit=100")
			.then((res) => res.json())
			.then((data) => {
				SetItems(data);
			});
	}, []);

	if (!items.data) {
		return <p>Loading...</p>;
	}

	console.log(items.data.children);
	return (
		<PostContainer>
			{items.data.children
				.filter((i) => i.data.post_hint === "image")
				.map(({ kind, data: { id, title, thumbnail, url } }) => {
					return <Post key={id} title={title} thumbnail={thumbnail} url={url} />;
				})}
		</PostContainer>
	);
};

export default App;
