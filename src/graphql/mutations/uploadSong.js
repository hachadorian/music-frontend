import { gql } from "@apollo/client";

export const UPLOAD_MUT = gql`
  mutation UploadSong($name: String!, $genre: String!, $song: Upload!) {
    uploadSong(name: $name, genre: $genre, song: $song) {
      ... on Song {
        name
        genre
        url
      }
      ... on Errors {
        message
      }
    }
  }
`;
