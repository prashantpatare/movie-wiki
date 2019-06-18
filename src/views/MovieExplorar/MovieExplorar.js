import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cast from "./Cast/CastContainer";
import Reviews from "./Reviews/Reviews";
import Videos from './Videos/Videos';

import OverviewCard from "./OverviewCard/OverviewCard";

import "./MovieExplorar.css";

function App(prop) {
  console.log(prop);

  function createLink(path, linkTitle) {
    return (
      <Link
        to={{
          pathname: "/" +  path  + "/",
          state: {
            id: prop.history.location.state.id
          }
        }}
      >
        {linkTitle}
      </Link>
    );
  }

  return (
    <Router>
      <header>
        <OverviewCard />
      </header>
      <nav class="movie-explorar-nav">
        {createLink('reviews','Reviews')}
        {createLink('videos','Videos')}
        <Link to="/videos/">Images</Link>
        <Link to="/videos/">Changes</Link>
        <hr />
      </nav>
      <main>
        <Route path="/movie/:id" exact component={Cast} />
        <Route path="/reviews" exact component={Reviews} />
        <Route path="/videos" exact component={Videos} />
      </main>
    </Router>
  );
}

export default App;
