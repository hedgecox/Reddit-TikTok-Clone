import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #676d8a;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoadingImage = styled.img`
	max-width: 100%;
`;

const Loading = () => {
	return (
		<LoadingContainer>
			<LoadingImage src="/loader.gif" alt="Loading..." />
		</LoadingContainer>
	);
};

export default Loading;
