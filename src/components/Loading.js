import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #676d8a;
	display: flex;
	align-items: center;
	justify-content: center;
	scroll-snap-align: start;
`;

const Error = styled.div`
	position: absolute;
	bottom: 60px;
	background-color: #fdecea;
	color: #611a15;
	left: 8px;
	right: 8px;
	padding: 10px;
	border-radius: 6px;
`;

const LoadingImage = styled.img`
	max-width: 100%;
`;

const Loading = ({ error }) => {
	return (
		<LoadingContainer>
			<LoadingImage src="/loader.gif" alt="Loading..." />
			{error && <Error>{error}</Error>}
		</LoadingContainer>
	);
};

export default Loading;
