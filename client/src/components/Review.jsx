import React from 'react';
import PropTypes from 'prop-types';

const Review = props => (
  <div className="container review">
    <div className="container user" >
      <div className="row">
        <div className="col-s-2">
          <img className="profilePhoto" src={props.review.userPhoto} alt="user" />
        </div>
        <div className="col">
          <div className="row">
            <span className="username" >{props.review.userName}</span>
          </div>
          <div className="row">
            <span className="reviewDate" >{props.review.date}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text">
      {props.review.text}
    </div>
  </div>
);

Review.propTypes = {
  review: PropTypes.shape({
    reviewId: PropTypes.number,
    roomId: PropTypes.number,
    userId: PropTypes.number,
    userName: PropTypes.string,
    userPhoto: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default Review;
