import React from "react";
import styled from "styled-components";
const Loading = () => {
  return (
    <Container>
      <h1>Loading...</h1>;
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;
  > h1 {
    font-size: 3rem;
  }
`;
