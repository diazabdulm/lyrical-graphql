import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import LyricList from "./LyricList";
import LyricCreate from "./LyricCreate";

import { SONG_DETAIL } from "../queries/songQueries";

export default function SongDetail({ match }) {
  const { loading, error, data } = useQuery(SONG_DETAIL, {
    variables: { id: match.params.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Fragment>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricCreate songId={match.params.id} />
    </Fragment>
  );
}
