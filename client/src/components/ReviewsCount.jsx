import React from 'react';
import PropTypes from 'prop-types';

const ReviewsCount = props => (
  <div className="ReviewsCount">
    Reviews Count Component for room {props.roomId}
  </div>
);

ReviewsCount.propTypes = {
  roomId: PropTypes.number.isRequired,
};

export default ReviewsCount;

