import React from 'react';
import PosterCard from '../../../../components/PosterCard/PosterCard'
import BackdropCard from '../../../../components/BackdropCard/BackdropCard'

class MovieList extends React.Component{

    render(){
        const movies = this.props.movies;
        const view = this.props.settings.view;

        return  (
            <div >
                {movies.map((item, key) => view === 'PosterCardView' ?  <PosterCard movie={item}/> :  <BackdropCard movie={item}/> ) }
            </div> 
        );
    }
}

export default MovieList; 