import React from 'react';
import PropTypes from 'prop-types';
import Subrating from './Subrating';

const Ratings = ({
  accuracy, checkIn, cleanliness, communication, location, value 
}) => (
  <div>
    Ratings Component
    <Subrating category="accuracy" rating={accuracy} />
    <Subrating category="checkIn" rating={checkIn} />
    <Subrating category="cleanliness" rating={cleanliness} />
    <Subrating category="communication" rating={communication} />
    <Subrating category="location" rating={location} />
    <Subrating category="value" rating={value} />

  </div>
);

Ratings.propTypes = {
  accuracy: PropTypes.number.isRequired,
  checkIn: PropTypes.number.isRequired,
  cleanliness: PropTypes.number.isRequired,
  communication: PropTypes.number.isRequired,
  location: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default Ratings;
