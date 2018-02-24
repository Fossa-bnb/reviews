import React from 'react';
import PropTypes from 'prop-types';

const OverallStars = props => (
  <div>
    Overall stars component for room {props.roomId}
  </div>
);

OverallStars.propTypes = {
  roomId: PropTypes.number.isRequired,
};

export default OverallStars;
