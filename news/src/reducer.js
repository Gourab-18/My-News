import React from "react";
import { LOADING, GET_STORIES, REMOVE_STORIES, SEARCH, PAGES } from "./data";

const reducer = (state, action) => {
  // This thing helps to manage the state based upon which other actions can be performed
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
      break;
    case GET_STORIES:
      return {
        //   we will return entire state + some changes
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    default:
      break;
  }
};

export default reducer;
