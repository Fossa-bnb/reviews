import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

const OverallStars = (props) => {
  const roundedStars = Math.round(props.stars * 2) / 2;

  return (
    <div>
      <ReactStars
        count={5}
        edit={false}
        half
        value={roundedStars}
        size={24}
        color1="#D8D8D8"
        color2="#008489"
      />
    </div>
  );
};

OverallStars.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default OverallStars;
