import React from 'react';
import PropTypes from 'prop-types';
import Subrating from './Subrating';

const Ratings = props => (
  <div>
    <Subrating category="Accuracy" rating={props.ratings.accuracy} />
    <Subrating category="Check In" rating={props.ratings.checkIn} />
    <Subrating category="Cleanliness" rating={props.ratings.cleanliness} />
    <Subrating category="Communication" rating={props.ratings.communication} />
    <Subrating category="Location" rating={props.ratings.location} />
    <Subrating category="Value" rating={props.ratings.value} />

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
