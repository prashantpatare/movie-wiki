import React from "react";
import ImageResource from "../../../../components/ImageResource/ImageResource";
import "./ReviewCard.css";

function ReviewCard(props) {
  const review = props.reviewinfo;
  return (
    <div className="review-card">
      <div className="review-card-left-pane">
        <div className="user-avtar" >
        <img src={require("./userAvtar.png")} width='100px'/>
        </div>
      </div>
      <div className="review-card-right-pane">
        <div className="header" > A review by {review.author} </div>
        <div className="content"> 
        {review.content}
        </div>
        <div className="footer">...Read More </div> 
      </div>
    </div>
  );
}

export default ReviewCard;
