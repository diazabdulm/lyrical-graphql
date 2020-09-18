import { gql } from "@apollo/client";

export const SONG_LIST = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const SONG_DETAIL = gql`
  query SongDetail($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        likes
        content
      }
    }
  }
`;
