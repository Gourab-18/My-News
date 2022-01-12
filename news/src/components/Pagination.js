import React, { useContext } from "react";
import { NewsContext } from "../context";
import styled from "styled-components";
const Pagination = () => {
  const { API, loading, changePage, page } = useContext(NewsContext);

  return (
    <>
      <Container>
        <button onClick={() => changePage("decrease")}>Prev</button>
        <span>{page + 1}</span>
        <button onClick={() => changePage("increase")}>Next</button>
      </Container>
    </>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    margin: 1rem;
  }
`;
