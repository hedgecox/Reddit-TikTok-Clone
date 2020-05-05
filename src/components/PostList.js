import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { connect } from "react-redux";

import Post from "./Post";
import Loading from "./Loading";
import { getPosts } from "../redux/actions";

const PostContainer = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: ${(props) => props.height}px;
`;

const PostList = (props) => {
	const Sub = props.match.params.sub || "EarthPorn";
	const { getPosts, Posts } = props;
	const postContainerRef = useRef(null);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		if (!Posts[Sub] && Posts._loading === false) {
			getPosts(Sub);
		}

		const handleResize = debounce(() => {
			setHeight(window.innerHeight);
		}, 500);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [getPosts, Sub, Posts]);

	if (!Posts[Sub]) {
		return (
			<PostContainer height={height}>
				<Loading error={Posts._error} />
			</PostContainer>
		);
	}

	const scrollStop = () => {
		if (postContainerRef.current) {
			const { scrollTop, clientHeight, scrollHeight } = postContainerRef.current;
			const itemsLeft = scrollHeight / clientHeight - scrollTop / clientHeight;

			if (itemsLeft < 5) {
				getPosts(Sub, Posts[Sub].after);
			}
		}
	};

	const FilteredPosts = Posts[Sub].children.filter((i) => i.data.post_hint === "image");

	if (!FilteredPosts.length) {
		return (
			<PostContainer height={height}>
				<Loading error={`Sorry, the SubReddit '${Sub}' doesn't seem to have very many pictures`} />
			</PostContainer>
		);
	}

	return (
		<PostContainer onScroll={debounce(scrollStop, 200)} ref={postContainerRef} height={height}>
			{FilteredPosts.map(({ data: { id, title, thumbnail, url, ups, num_comments } }) => {
				return <Post key={id} title={title} thumbnail={thumbnail} url={url} ups={ups} num_comments={num_comments} />;
			})}
			{Posts._loading && <Loading />}
		</PostContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		Posts: state.Posts,
	};
};

export default connect(mapStateToProps, { getPosts })(PostList);
