import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { LOADING, GET_STORIES, REMOVE_STORIES, SEARCH, PAGES } from "./data";
const NewsContext = React.createContext();

const NewsProvider = ({ children }) => {
  const API = "https://hn.algolia.com/api/v1/search?";
  const bhasa = "Bhala Pila";

  const initial = {
    loading: true,
    hits: [], // it will contain an array of news ,
    page: 0,
    nbPages: 50,
    // query for searching
    query: "business",
  };
  const [state, dispatch] = useReducer(reducer, initial);
  const fetchAPI = async (url) => {
    // console.log(url);
    dispatch({ type: LOADING });
    // fetching using try catch
    try {
      const value = await fetch(url);

      const data = await value.json();
      console.log(data);

      //   After fetching data we will the stories, we will have to use dispatch again
      dispatch({
        type: GET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (e) {
      console.log("Error" + e);
    }
  };
  useEffect(() => {
    //   This is the final API
    const url = `${API}query=${state.query}&page=${state.page}`;
    fetchAPI(url);
  }, []);

  return (
    //   note inside value, it should be an oject
    <NewsContext.Provider value={{ API, bhasa, ...state }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
