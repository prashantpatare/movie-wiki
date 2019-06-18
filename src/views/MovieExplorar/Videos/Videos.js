

import React from "react";
import VideoCard from './VideoCard/VideoCard';
import getConstructedUrl from "../../../services/getConstructedURL";
import { withRouter } from 'react-router';

class VideoContainer extends React.Component {
  containerSize = 5;

  constructor(prop) {
    super(prop);
    this.state = { videos: null };
  }

  fetchvideos(id) {
    const url = getConstructedUrl("movie/" + id + "/videos", {});

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ videos: data.results.slice(0, this.containerSize) });
        console.log(this.state.videos);
      });
  }

  componentDidMount() {
    const id =     this.props.history.location.state.id ; //    "299537";

    
    this.fetchvideos(id);
  }

  render() {
    const videoArr = this.state.videos;
    if (!videoArr) return null;
    if (videoArr.length === 0) return ("We don't have any videos for this movie.");
    const videoCollection = videoArr.map(i => <VideoCard videoinfo={i} />);
    return (
      <div>
        <h3>Top videos</h3>
        {videoCollection}
      </div>
    );
  }
}

export default withRouter(VideoContainer);





