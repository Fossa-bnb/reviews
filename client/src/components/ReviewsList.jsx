import React from 'react';
import PropTypes from 'prop-types';

import Review from './Review';
import Navigation from './Navigation';

const ReviewsList = props => (
  <div>
    Reviews List for room {props.roomId}
    <Review reviewId={1} />
    <Review reviewId={2} />

    <Navigation />
  </div>
);

ReviewsList.propTypes = {
  roomId: PropTypes.number.isRequired,
};

export default ReviewsList;
