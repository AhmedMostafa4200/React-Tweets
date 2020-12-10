import TYPES from "./types";

const initialState = {
  items: [], // blogs
  item: {}, // one blog
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case TYPES.GET_BLOGS:
      return {
        ...prevState,
        items: action.payload,
      };

    default:
      return prevState;
  }
}
