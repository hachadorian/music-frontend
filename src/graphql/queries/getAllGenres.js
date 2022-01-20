import { gql } from "@apollo/client";

export const GETALLGENRES_QUERY = gql`
  query {
    getAllGenres {
      genre
    }
  }
`;
