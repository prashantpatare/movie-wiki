import React from "react";
import CastCard from "./CastCard/CastCard";
import { withRouter } from 'react-router';

import getConstructedUrl from "../../../services/getConstructedURL";

class CastContainer extends React.Component {
  containerSize = 5;

  constructor(prop) {
    super(prop);
    this.state = { casts: null };
  }

  fetchCasts(id) {
    const url = getConstructedUrl("movie/" + id + "/credits", {});

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ casts: data.cast.slice(0, this.containerSize) });
      });
  }

  componentDidMount() {
    const id =     this.props.history.location.state.id ; //    "299537";
    //console.log(JSON.stringify(this.props.history.location.state.id))
    this.fetchCasts(id);
  }

  render() {
    const castArr = this.state.casts;
    if (!castArr) return null;
    const CastCollection = castArr.map(i => <CastCard castinfo={i} />);
    return (
      <div>
        <h3>Top Billed Casts</h3>
        {CastCollection}
      </div>
    );
  }
}

export default withRouter(CastContainer);
