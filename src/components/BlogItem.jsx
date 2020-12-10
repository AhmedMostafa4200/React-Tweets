import React from "react";

import { getImageUrl } from "../utils/utils";

import "./BlogItem.css";

const BlogItem = (props) => {
  let blogs = props.blogs;

  if (blogs) {
    return (
      <React.Fragment>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="blog-card card text-white mt-1 border-success"
                style={{ backgroundColor: "#011528" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4" style={{ overflow: "hidden" }}>
                    <img
                      className="card-img"
                      src={
                        blog.additional?.media
                          ? `${blog?.additional?.media[0]?.media_url}`
                          : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg"
                      }
                      alt=""
                    />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="mb-5 card-text">{blog.description}</p>
                      <small className="mt-5 my-card-tags">
                        {blog.posted_date}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
  return <h1>loading</h1>;
};

export default BlogItem;
