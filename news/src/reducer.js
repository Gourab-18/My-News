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
    case REMOVE_STORIES:
      return {
        ...state,
        hits: state.hits.filter((data) => data.objectID !== action.payload),
      };
    case SEARCH:
      return {
        ...state,
        query: action.payload.query,
        page: 1,
      };
    case PAGES:
      if (action.payload == "increase") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      } else if (action.payload === "decrease") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      break;
  }
};

export default reducer;
