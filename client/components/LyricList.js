import React from "react";
import { useMutation, gql } from "@apollo/client";

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default function LyricList({ lyrics }) {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const handleLike = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  const renderLyrics = lyrics.map(({ id, likes, content }) => (
    <li className="collection-item" key={id}>
      {content}
      <i onClick={() => handleLike(id, likes)} className="material-icons">
        thumb_up
      </i>
      {likes}
    </li>
  ));

  return <ul className="collection">{renderLyrics}</ul>;
}
