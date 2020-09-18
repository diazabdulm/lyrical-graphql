import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import SongListItem from "./SongListItem";
import { SONG_LIST } from "../queries/songQueries";

export default function SongList() {
  const { loading, error, data } = useQuery(SONG_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderSongs = data.songs.map((songProps) => (
    <SongListItem key={songProps.id} {...songProps} />
  ));

  return (
    <div className="container">
      <ul className="collection">{renderSongs}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}
