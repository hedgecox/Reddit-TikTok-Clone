import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DiscoverContainer = styled.div`
	padding: 0 10px;
`;

const Topic = styled(Link)`
	text-decoration: none;
	display: flex;
	color: #333;
	padding: 9px 5px;
	border-top: 1px solid #cccccc77;
	font-size: 1.1em;
	font-weight: 600;
	align-items: center;

	&:last-of-type {
		border-bottom: 1px solid #cccccc77;
	}
`;

const DiscoverTitle = styled.h3`
	margin: 0;
	color: #333;
	font-size: 1.4em;
	margin: 7px 0;
`;

const SubIcon = styled.span`
	background-color: ${(props) => props.color};
	color: #fff;
	width: 2.2rem;
	height: 2.2rem;
	display: flex;
	margin-right: 8px;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	font-size: 1.5em;
	font-weight: 700;
`;

const Topics = ["Art", "Sketchpad", "Cats", "Pic", "SkyPorn", "AstroPhotography", "itookapicture"];
const TopicColours = ["#edcc68", "#ed8368", "#6892ed", "#be68ed", "#a1d676", "#d77ed9", "#cc6060"];

const Discover = () => {
	return (
		<DiscoverContainer>
			<DiscoverTitle>Topics</DiscoverTitle>
			{Topics.map((i, ind) => {
				return (
					<Topic key={ind} to={`/r/${i}`}>
						<SubIcon color={TopicColours[ind]}>#</SubIcon>
						{i}
					</Topic>
				);
			})}
		</DiscoverContainer>
	);
};

export default Discover;
