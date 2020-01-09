import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { MOVIES } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
`;

const Home = () => {
  const {
    loading,
    error,
    data
  } = useQuery(MOVIES);
  if (loading) return <span>loading</span>;
  if (error) return `<span>Error! ${error}</span>`;

  return (
    <Container>
      {data.movies.map(movie => (
        <Movie
          id={movie.id}
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
        />
      ))}
    </Container>
  );
};

export default Home;
