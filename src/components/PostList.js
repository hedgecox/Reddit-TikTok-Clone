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

const PostList = ({ getPosts, Posts, Sub = "EarthPorn" }) => {
    const postContainerRef = useRef(null);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        getPosts(Sub);

        const handleResize = debounce(() => {
            setHeight(window.innerHeight);
        }, 500);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [getPosts, Sub]);

    if (!Posts[Sub]) {
        return (
            <PostContainer height={height}>
                <Loading />
            </PostContainer>
        );
    }

    const scrollStop = () => {
        const { scrollTop, clientHeight, scrollHeight } = postContainerRef.current;
        const itemsLeft = scrollHeight / clientHeight - scrollTop / clientHeight;
        console.log("itemsLeft", itemsLeft);

        if (itemsLeft < 5) {
            console.log("need more items");
            getPosts(Sub, Posts[Sub].after);
        }
    };

    //console.log(items.data.children);
    return (
        <PostContainer onScroll={debounce(scrollStop, 200)} ref={postContainerRef} height={height}>
            {Posts[Sub].children
                .filter((i) => i.data.post_hint === "image")
                .map(({ data: { id, title, thumbnail, url, ups, num_comments } }) => {
                    return <Post key={id} title={title} thumbnail={thumbnail} url={url} ups={ups} num_comments={num_comments} />;
                })}
        </PostContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        Posts: state.Posts,
    };
};

export default connect(mapStateToProps, { getPosts })(PostList);
