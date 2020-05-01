import React from "react";
import styled from "styled-components";

const PostWrap = styled.div`
	background-color: red;
	height: 100vh;
	border-bottom: 1px solid #ccc;
	scroll-snap-align: start;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PostTitle = styled.h3`
	position: absolute;
	bottom: 5px;
	left: 5px;
`;

const Post = ({ id, thumbnail, title, url }) => {
	return (
		<PostWrap>
			<img src={thumbnail} alt={title} />
			<img src={url} alt={title} />
			<PostTitle>{title}</PostTitle>
		</PostWrap>
	);
};

export default Post;
