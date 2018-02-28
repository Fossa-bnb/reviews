import React from 'react';
import PropTypes from 'prop-types';
import Subrating from './Subrating';

const Ratings = ({
  accuracy, checkIn, cleanliness, communication, location, value,
}) => (
  <div>
    Ratings Component
    <Subrating category="Accuracy" rating={accuracy} />
    <Subrating category="Check In" rating={checkIn} />
    <Subrating category="Cleanliness" rating={cleanliness} />
    <Subrating category="Communication" rating={communication} />
    <Subrating category="Location" rating={location} />
    <Subrating category="Value" rating={value} />

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
