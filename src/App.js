import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from "./views/Movies/Movies";
import MovieExplolar from "./views/MovieExplorar/MovieExplorar";
import history from "../src/services/history";

import "./App.css";

function App() {
  return (
    <Router history={history}>
      <header className="main-header">{"The Moviebook"}</header>
      <nav className="main-nav">
        <div className="main-nav-link">
          <Link to="/">Home</Link> |<Link to="/about/">About</Link> |
        </div>
      </nav>
      <main className="main-content1">
        <Route path="/" exact component={Movies} />
        <Route path="/movie/:id" exact component={MovieExplolar} />
      </main>
      <div style={{ clear: "both" }} />
      <footer>
        <img src={require("./logos/themoviedb.svg")} width="100px" alt='' />
        {"Powered by TheMovieDb.org"}
      </footer>
    </Router>
  );
}

export default App;
