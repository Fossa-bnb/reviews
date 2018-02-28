import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

const Subrating = (props) => {
  const roundedStars = Math.round(props.rating * 2) / 2;

  return (
    <div className="subrating">
      {props.category} <ReactStars
        count={5}
        edit={false}
        half
        value={roundedStars}
        size={20}
        color1="#D8D8D8"
        color2="#008489"
      />
    </div>
  );
};

Subrating.propTypes = {
  category: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Subrating;
