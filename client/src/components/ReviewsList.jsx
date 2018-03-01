import React from 'react';
import PropTypes from 'prop-types';

import Review from './Review';
import Navigation from './Navigation';

const ReviewsList = props => (
  <div>
    <Review review={props.reviews[0]} />
    <Review review={props.reviews[1]} />
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
