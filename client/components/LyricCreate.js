import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_LYRIC = gql`
  mutation CreateLyric($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default function LyricCreate({ songId }) {
  const [content, setContent] = useState("");

  const [createLyric] = useMutation(CREATE_LYRIC);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setContent("");
    createLyric({ variables: { content, songId } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a Lyric</label>
      <input onChange={handleChange} value={content} />
    </form>
  );
}
