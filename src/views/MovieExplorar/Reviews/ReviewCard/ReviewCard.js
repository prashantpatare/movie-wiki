import React from "react";
import ImageResource from "../../../../components/ImageResource/ImageResource";
import './ReviewCard.css'

function ReviewCard(props) {
  const review = props.reviewinfo;
  return (
    <div className="review-card">
      <div className='review-card-description'>
        <h4>A review by {review.author} </h4> <br />
        {review.content}
      </div>
    </div>
  );
}

export default ReviewCard;
