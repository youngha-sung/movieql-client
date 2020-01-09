import { gql } from "@apollo/client";

export const MOVIES = gql`
  {
    movies(limit: 10, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query Movie($movieId: Int!) {
    movie(id: $movieId) {
      title
      rating
      medium_cover_image
      description_intro
    }
    suggestions(id: $movieId) {
      title
      medium_cover_image
      summary
      rating
    }
  }
`;