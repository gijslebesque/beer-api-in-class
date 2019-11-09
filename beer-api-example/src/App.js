import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import Home from "./pages/Home/";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-beers" component={AllBeers} />
      </Switch>
    </div>
  );
}

export default App;
