import { getByTitle } from "@testing-library/react";
import React, { useContext } from "react";
import { NewsContext } from "../context";
import Loading from "./Loading";
import styled from "styled-components";
const News = () => {
  const { loading, hits, removeNews } = useContext(NewsContext);
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  return (
    <>
      <OuterContainer>
        {hits.map((data) => {
          const { title, url, author, objectID, num_comments } = data;

          return (
            <Container>
              <article key={objectID}>
                {url && (
                  <>
                    <Block>
                      <a href={url} target="_blank">
                        <h1>{title}</h1>
                        <Span>
                          <span>{author}</span>
                          <span>Comments: {num_comments}</span>
                        </Span>
                      </a>
                      <button onClick={() => removeNews(objectID)}>
                        Remove
                      </button>
                    </Block>
                  </>
                )}
              </article>
            </Container>
          );
        })}
      </OuterContainer>
    </>
  );
};

export default News;
const OuterContainer = styled.div`
  width: 80vw;
  /* centers everything */
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;
  background-color: hsl(210, 36%, 96%);
`;
const Container = styled.div`
  width: 30vw;
  border: 2px solid red;
`;

const Span = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  width: 20vw;
  border: 2px solid blue;
  > button {
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
