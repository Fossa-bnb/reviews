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
  ratings: PropTypes.shape({
    accuracy: PropTypes.number,
    checkIn: PropTypes.number,
    cleanliness: PropTypes.number,
    communication: PropTypes.number,
    location: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
};


export default Ratings;
