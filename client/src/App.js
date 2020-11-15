import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
// import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;
