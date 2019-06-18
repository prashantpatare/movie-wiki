import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from "./views/Movies/Movies";
import MovieExplolar from './views/MovieExplorar/MovieExplorar'
import history from '../src/services/history'

import "./App.css";

function App() {
  return (
    <Router history={history}>
      <header><h2>Welcome to Movie-Wiki</h2></header>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about/">About</Link> |
        <Link to="/users/">Credits</Link>
        <hr />
      </nav>
      <main>
        <Route path="/" exact component={Movies} />
        <Route path="/movie/:id" exact component={MovieExplolar} />
      </main>
      <footer>
        <hr /> Powered by TheMovieDb.org
      </footer>
    </Router>
  );
}

export default App;
