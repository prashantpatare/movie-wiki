import React from "react";
import ImageResource from "../../components/ImageResource/ImageResource";
import "./PosterCard.css";
import MovieList from "../../views/Movies/MoviesNavigator/MoviesList/MovieList";

import history from '../../services/history'

class PosterCard extends React.Component {

  heartGraphiconOnClick(){
    alert('a')
  }
  
  handleOnClickLink = ()=>{
    history.push({pathname:'/movie/'+this.props.movie.id, state: { id: this.props.movie.id }
  });  
  }

  render() {
    const movie = this.props.movie;

    return (
      <div className="card">
        <div className="card-image">   
          <ImageResource path={movie.poster_path} type="poster" />
          
          <div className="card-overlay">
            <span
              class="glyphicon glyphicon-fire foo"
              style={{ "font-size": "20px" }}
            />
            <span
              class="glyphicon glyphicon-bookmark  card-overlay-right"
              style={{ "font-size": "20px" }}
            />
            <span onClick={this.heartGraphiconOnClick}
              class="glyphicon glyphicon-heart card-overlay-right"
              style={{ "font-size": "20px", 'color':'red' }}
            />
          </div>

          <div class="tooltip2 tooltiptext"><b>Popularity Rank</b><br/>Todays:100 <br/>Last week:200</div>

        </div>
        <div className="card-info" style={{style:"text-align:center"}}>
        

          <div className="card-info-title">{movie.title}</div>
          <div className="card-info-overview">{movie.overview}</div>
          <div className="card-info-footer">
            <p onClick={this.handleOnClickLink}>More Info</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterCard;
