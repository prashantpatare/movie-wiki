import React from "react";
import ImageResource from "../../../components/ImageResource/ImageResource";
import getConstructedUrl from "../../../services/getConstructedURL";
import { withRouter } from 'react-router';


import "./OverviewCard.css";

class OverviewCard extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { movie: null, crew: null };
  }

  fetchMovie(id) {
    const url = getConstructedUrl("movie/" + id, {
      language: "en-US"
    });

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ movie: data }));
  }

  fetchCrew(id) {
    const url = getConstructedUrl("movie/" + id + "/credits", {});

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.cast);
        this.setState({ crew: data.crew });
      });
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props.history.location.state.id))
    const id =  this.props.history.location.state.id;//"299537"; 
  
    this.fetchMovie(id);
    this.fetchCrew(id);
  }

  render() {
    const movie = this.state.movie;
    const crew = this.state.crew;

    if (!movie || crew === null) return "data not fetched yet";
   // console.log("............" + JSON.stringify(crew));

    return (
      <div className="backdrop-container">
        <ImageResource path={movie.backdrop_path} type="backdrop-wallpaper" />
        <div className="overview-card">
          <ImageResource path={movie.poster_path} type="poster-large" />
          <div className="overview-card-info">
            <div className="overview-card-info-title">{movie.title}</div>
            <div className="overview-card-info-overview">
              <h2>overview </h2> <p>{movie.overview}</p>
            </div>
            <div className='crew-top-container'>
              <h3>Featured Crew </h3>
              <div className="crew-container crew-container-left">
                <strong>{crew[0].name}</strong> <br /> {crew[0].job}
              </div>
              <div className="crew-container crew-container-right">
                <strong>{crew[1].name}</strong> <br /> {crew[1].job}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OverviewCard);
