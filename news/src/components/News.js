import { getByTitle } from "@testing-library/react";
import React, { useContext } from "react";
import { NewsContext } from "../context";
import styled from "styled-components";
const News = () => {
  const { loading, hits, removeNews } = useContext(NewsContext);
  if (loading)
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  return (
    <>
      {hits.map((data) => {
        const { title, url, author, objectID, num_comments } = data;

        return (
          <Container>
            <article key={objectID}>
              {url && (
                <>
                  <a href={url} target="_blank">
                    <h1>{title}</h1>
                    <Span>
                      <span>{author}</span>
                      <span>{num_comments}</span>
                    </Span>
                  </a>
                  <button onClick={() => removeNews(objectID)}>Remove</button>
                </>
              )}
            </article>
          </Container>
        );
      })}
    </>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.div`
  display: flex;
  justify-content: space-between;
`;
