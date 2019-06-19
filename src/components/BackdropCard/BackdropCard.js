import React from "react";
import ImageResource from "../../components/ImageResource/ImageResource";
import history from "../../services/history";
import RadialProgressBar from "../RadialProgressBar/RadialProgressBar";
import "./BackdropCard.css";

class PosterCard extends React.Component {
  handleOnClickLink = () => {
    history.push({
      pathname: "/movie/" + this.props.movie.id,
      state: { id: this.props.movie.id }
    });
  };

  render() {
    const movie = this.props.movie;

    return (
      <div>
        <div className="backdrop-card">
          <div className="backdrop-card-image" onClick={this.handleOnClickLink}>
            <ImageResource path={movie.backdrop_path} type="backdrop" />
          </div>
          <div
            className="backdrop-card-info"
            style={{ style: "text-align:center" }}
          >
            <div className="card-info-header-container">
              <div className="user-score-container">
                <RadialProgressBar
                  value={movie.vote_average * 10}
                  size="small"
                />
              </div>
              <div
                className="movie-title-container backdrop-card-info-title"
                style={{ height: "20px", width: "350px", marginLeft: "-70px" }}
              >
                {movie.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterCard;
