import React from 'react';
import PropTypes from 'prop-types';

const OverallStars = (props) => {
  const roundedStars = Math.round(props.stars * 2) / 2;

  return (
    <div>
    Number of stars: {roundedStars}
    </div>
  );
};

OverallStars.propTypes = {
  // roomId: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
};

export default OverallStars;
