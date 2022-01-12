import React, { useContext } from "react";
import { NewsContext } from "../context";
const News = () => {
  const { loading } = useContext(NewsContext);
  if (loading)
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  return (
    <>
      <h1>Not loading</h1>
    </>
  );
};

export default News;
