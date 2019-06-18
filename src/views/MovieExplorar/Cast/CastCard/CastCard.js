import React from "react";
import ImageResource from "../../../../components/ImageResource/ImageResource";
import "./CastCard.css";

function CastCard(props) {
  const cast = props.castinfo;
  return (
    <div className="cast-card">
      <ImageResource path={cast.profile_path} type="cast" />
      <div className='cast-card-description'>
        <b>{cast.name} </b> <br />
        {cast.character}
      </div>
    </div>
  );
}

export default CastCard;
