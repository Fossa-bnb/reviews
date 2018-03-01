import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  console.log(props);
  return (
    <div>
    Review id: {props.review.reviewId}
    </div>
  );
};

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
