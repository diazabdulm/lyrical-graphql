import React from "react";
import { useMutation, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import { SONG_LIST } from "../queries/songQueries";

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default function SongListItem({ id, title }) {
  const [deleteSong] = useMutation(DELETE_SONG, {
    refetchQueries: [{ query: SONG_LIST }],
  });

  const handleClick = () => {
    deleteSong({ variables: { id } });
  };

  return (
    <li className="collection-item">
      <Link to={`/songs/${id}`}>{title}</Link>
      <i className="material-icons" onClick={handleClick}>
        delete
      </i>
    </li>
  );
}
