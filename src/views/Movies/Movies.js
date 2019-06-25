import React from "react";
import MoviesNavigator from "./MoviesNavigator/MoviesNavigator";
import ViewSelector from "../../components/ViewSelector/ViewSelector";
import Filter from "../../components/Filter/Filter";

import "./Movies.css";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "PosterCardView",
      filter: { country: "US" }
    };
  }

  handleViewChange = newView => {
    console.log("setting state-view to " + newView);
    this.setState({ view: newView });
  };

  render() {
    return (
      <div className="app-center-container-wide">
          <h2>Popular Movies</h2>
          <div className="settings-container">
            <Filter />
            <ViewSelector onViewChange={this.handleViewChange} />
          </div>
        <MoviesNavigator settings={this.state} />
      </div>
    );
  }
}

export default Movies;
