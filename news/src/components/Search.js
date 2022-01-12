import React, { useContext } from "react";
import { NewsContext } from "../context";

const Search = () => {
  const { API, bhasa, loading } = useContext(NewsContext);
  return <>{bhasa}</>;
};

export default Search;
