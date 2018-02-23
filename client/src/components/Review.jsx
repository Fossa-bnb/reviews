import React from 'react';
import PropTypes from 'prop-types';

const Reviews = props => (
  <div>
    Review id: {props.reviewId}
  </div>
);

Reviews.propTypes = {
  reviewId: PropTypes.number.isRequired,
};

export default Reviews;
