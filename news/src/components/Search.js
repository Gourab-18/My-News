import React, { useContext } from "react";
import { NewsContext } from "../context";

const Search = () => {
  const { API, bhasa, loading, query, searchNews } = useContext(NewsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => searchNews(e)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Search;
