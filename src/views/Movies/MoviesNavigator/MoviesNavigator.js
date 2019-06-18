import React from "react";
import getConstructedUrl from "../../../services/getConstructedURL";
import PropTypes from "prop-types";
import MovieList from "./MoviesList/MovieList";
import Paginator from "../../../components/Paginator/Paginator";
import ViewSelector from '../../../components/ViewSelector/ViewSelector'

class MoviesNavigator extends React.Component {
  static propTypes = {
    view: PropTypes.string,
    filter: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalPages: 0,
      currentPage: 1
    };
  }

  fetchMovies() {
    const url = getConstructedUrl("discover/movie", {
      language: "en-US",
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      page: this.state.currentPage
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results, totalPages: data.total_pages });
      });
  }

  componentDidMount() {
    const { view, filter } = this.props.settings;
    this.fetchMovies();
  }

  componentWillReceiveProps(nextProps) {
    const { view, filter } = nextProps.settings;
    this.fetchMovies();
  }

  updateCurrentPage = newPage => {
    this.setState({ currentPage: newPage });
  };

  render() {
    const data = this.state.movies[1];
    const view = this.props.settings.view;
    const movielist = this.state.movies.map((item, key) => <p>{item.title}</p>);
    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          <Paginator
            pages={this.state.totalPages}
            updatePageCallBack={this.updateCurrentPage}
          />
        </div>
        <MovieList movies={this.state.movies} settings={{view: view}} />
      </React.Fragment>
    );
  }
}

export default MoviesNavigator;
