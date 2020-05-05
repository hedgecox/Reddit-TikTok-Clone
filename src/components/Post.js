import React from "react";
import styled from "styled-components";

const PostWrap = styled.div`
	height: ${(props) => props.height}px;
	scroll-snap-align: start;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Thumbnail = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
	filter: blur(10px);
`;

const PostTitle = styled.h3`
	position: absolute;
	bottom: 37px;
	left: 5px;
	font-size: 1em;
	color: #fff;
	max-width: calc(100% - 65px);
	text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
`;

const PostImage = styled.img`
	max-height: 100%;
	max-width: 100%;
`;

const Ups = styled.div`
	position: absolute;
	right: 5px;
	bottom: 170px;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Comments = styled(Ups)`
	bottom: 90px;
`;

const Icon = styled.svg`
	font-size: 50px;
	height: 1em;
	width: 1em;
	filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8));
`;

const kFormatter = (num) => {
	return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
};

const Post = ({ id, thumbnail, title, url, ups, num_comments }) => {
	return (
		<PostWrap height={window.innerHeight}>
			<Thumbnail src={thumbnail} alt={title} />
			<PostImage src={url} alt={title} />
			<Ups>
				<Icon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
				</Icon>
				{kFormatter(ups)}
			</Ups>
			<Comments>
				<Icon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"></path>
				</Icon>
				{kFormatter(num_comments)}
			</Comments>
			<PostTitle>{title}</PostTitle>
		</PostWrap>
	);
};

export default Post;
