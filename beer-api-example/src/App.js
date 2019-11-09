import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import Home from "./pages/Home/";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/all-beers" component={AllBeers} />
      </Switch>
    </div>
  );
}

export default App;
