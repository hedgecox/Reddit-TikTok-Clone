import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
	position: fixed;
	bottom: 0;
	padding: 3px 20px;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: ${(props) => (props.light ? "transparent" : "#fff")};

	border-top: 1px solid #00000022;

	:after {
		content: "";
		height: 1px;
		background-color: #ffffff22;
		width: 100%;
		position: absolute;
		top: 0;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const NavItem = styled.div`
	font-size: 9px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(props) => (props.light ? "#fff" : "#555")};
	text-decoration: none;
	margin: 0 15px;
	transition: transform 0.05s;
	text-shadow: ${(props) => (props.light ? "1px 1px 2px rgba(0, 0, 0, 0.8)" : "none")}

	&:active {
		transform: scale(0.8);
	}
`;

const Icon = styled.svg`
	font-size: 32px;
	height: 1em;
	width: 1em;
	filter: ${(props) => (props.light ? "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8))" : "none")};
`;

const Nav = ({ light }) => {
	return (
		<NavContainer light={light}>
			<StyledLink to="/">
				<NavItem light={light}>
					<Icon light={light} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
						<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
					</Icon>
					Home
				</NavItem>
			</StyledLink>

			<StyledLink to="/discover">
				<NavItem light={light}>
					<Icon light={light} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
					</Icon>
					Discover
				</NavItem>
			</StyledLink>
		</NavContainer>
	);
};

export default Nav;
