import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import GlobalStyle from "./globalStyles";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyle />
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
