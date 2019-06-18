import React from "react";
import ImageResource from "../../components/ImageResource/ImageResource";
import history from "../../services/history";
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
          <div className="backdrop-card-image">
            <ImageResource path={movie.backdrop_path} type="backdrop" />
          </div>
          <div
            className="backdrop-card-info"
            style={{ style: "text-align:center" }}
          >
            <div className="backdrop-card-info-title">{movie.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterCard;
