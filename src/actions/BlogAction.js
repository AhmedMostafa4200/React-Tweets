import axios from "axios";

import TYPES from "../reducers/types";

export function getAllBlogs() {
  return function (dispatch) {
    axios.get("https://sportscentral.io/api/popular-tweets").then((res) => {
      const blogs = res.data.allNews.data;
      dispatch({
        type: TYPES.GET_BLOGS,
        payload: blogs,
      });
    });
  };
}
