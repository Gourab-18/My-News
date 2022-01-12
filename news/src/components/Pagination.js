import React, { useContext } from "react";
import { NewsContext } from "../context";
const Pagination = () => {
  const { API, loading } = useContext(NewsContext);

  return (
    <>
      <h1 style={{ color: "black" }}>
        <a href={API} target="_blank">
          Hii
        </a>
      </h1>
    </>
  );
};

export default Pagination;
