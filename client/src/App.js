import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/Nav";
import Accounts from "./components/Accounts/accounts";
import Account from "./components/Account/Account";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/accounts" exact component={Accounts} />
        <Route path="/accounts/:id" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
