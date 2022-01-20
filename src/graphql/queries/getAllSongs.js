import { gql } from "@apollo/client";

export const GETALLSONGS_QUERY = gql`
  query {
    getAllSongs {
      id
      name
      genre
      url
      artist {
        id
        username
      }
    }
  }
`;
