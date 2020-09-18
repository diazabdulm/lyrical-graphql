import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default function SongCreate({ history }) {
  const [title, setTitle] = useState("");
  const [addSong] = useMutation(ADD_SONG, {
    onCompleted: () => history.push("/"),
  });

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong({ variables: { title } });
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input onChange={handleChange} value={title} />
      </form>
    </div>
  );
}
