import React from 'react';
import PropTypes from 'prop-types';

import Review from './Review';
import Navigation from './Navigation';

const ReviewsList = props => (
  <div>
    {props.reviews.map(review => (
      <Review review={review} />
      ))}
    <Navigation />
  </div>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewId: PropTypes.number,
    roomId: PropTypes.number,
    userId: PropTypes.number,
    userName: PropTypes.string,
    userPhoto: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.date,
  })).isRequired,
};

export default ReviewsList;
