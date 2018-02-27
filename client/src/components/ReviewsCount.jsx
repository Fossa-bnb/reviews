import React from 'react';
import PropTypes from 'prop-types';

const ReviewsCount = props => (
  <div className="ReviewsCount">
    {props.count} Reviews
  </div>
);

ReviewsCount.propTypes = {
  // roomId: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default ReviewsCount;

