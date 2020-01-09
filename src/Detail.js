import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { MOVIE_DETAILS } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
`;

// const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "700" : "400")};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  const {
    loading,
    error,
    data
  } = useQuery(MOVIE_DETAILS, {
    variables: { movieId: parseInt(movieId) }
  });
  if (loading) return <span>loading</span>;
  if (error) return `<span>Error! ${error}</span>`;
  const { movie, suggestions } = data;

  return (
    <Fragment>
      <Container>
        <Card as="img" src={movie.medium_cover_image} />
        <span>
          <Title>{movie.title}</Title>
          <Paragraph bold>Rating: {movie.rating}</Paragraph>
          <Paragraph>{movie.description_intro}</Paragraph>
        </span>
      </Container>
      <Title>Suggested</Title>
      <MovieContainer>
        {suggestions.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            poster={movie.medium_cover_image}
          />
        ))}
      </MovieContainer>
    </Fragment>
  );
};

export default Detail;
