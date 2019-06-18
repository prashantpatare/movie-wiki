import React from "react";
import ReviewCard from './ReviewCard/ReviewCard';

import getConstructedUrl from "../../../services/getConstructedURL";
import { withRouter } from 'react-router';

class reviewContainer extends React.Component {
  containerSize = 5;

  constructor(prop) {
    super(prop);
    this.state = { reviews: null };
  }

  fetchReviews(id) {
    const url = getConstructedUrl("movie/" + id + "/reviews", {});

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ reviews: data.results.slice(0, this.containerSize) });
        console.log(this.state.reviews);
      });
  }

  componentDidMount() {
    const id =     this.props.history.location.state.id ; //    "299537";

    
    this.fetchReviews(id);
  }

  render() {
    const reviewArr = this.state.reviews;
    if (!reviewArr) return null;
    if (reviewArr.length === 0) return ("We don't have any reviews for this movie.");
    const reviewCollection = reviewArr.map(i => <ReviewCard reviewinfo={i} />);
    return (
      <div>
        <h3>Top Reviews</h3>
        {reviewCollection}
      </div>
    );
  }
}

export default withRouter(reviewContainer);
