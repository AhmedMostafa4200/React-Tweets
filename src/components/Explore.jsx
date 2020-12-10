import React, { useEffect } from "react";
import { connect } from "react-redux";

import BlogItem from "./BlogItem";

import { getAllBlogs } from "../actions/BlogAction";

const Explore = (props) => {
  console.log(props.allBlogs, "props"); ////
  console.log(props.allBlogs[0]?.additional.media[0].media_url, "props"); ////

  useEffect(() => {
    props.getAllBlogs();
  }, []);

  return (
    <React.Fragment>
      <BlogItem blogs={props.allBlogs}></BlogItem>
    </React.Fragment>
  );
};
function mapStateToProps(state) {
  return {
    allBlogs: state.blogs.items,
  };
}
export default connect(mapStateToProps, { getAllBlogs })(Explore);
