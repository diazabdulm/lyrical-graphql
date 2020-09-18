import React from "react";
import { Switch, Route } from "react-router-dom";

import SongList from "./SongList";
import SongCreate from "./SongCreate";
import SongDetail from "./SongDetail";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={SongList} />
      <Route exact path="/songs/new" component={SongCreate} />
      <Route exact path="/songs/:id" component={SongDetail} />
    </Switch>
  );
}
