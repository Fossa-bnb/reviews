import React from 'react';
import PropTypes from 'prop-types';

const ReviewsCount = props => (
  <div className="ReviewsCount">
    {props.count} Reviews
  </div>
);

ReviewsCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ReviewsCount;

