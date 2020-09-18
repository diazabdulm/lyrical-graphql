import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Root = () => (
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
