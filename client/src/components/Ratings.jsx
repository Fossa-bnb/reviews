import React from 'react';
import PropTypes from 'prop-types';
import Subrating from './Subrating';

const Ratings = props => (
  <div className="container allRatings">
    <div className="row rating">
      <div className="col">
        <Subrating category="Accuracy" rating={props.ratings.accuracy} />
      </div>
      <div className="col">
        <Subrating category="Check In" rating={props.ratings.checkIn} />
      </div>
    </div>
    <div className="row rating">
      <div className="col">
        <Subrating category="Cleanliness" rating={props.ratings.cleanliness} />
      </div>
      <div className="col">
        <Subrating category="Communication" rating={props.ratings.communication} />
      </div>
    </div>
    <div className="row rating">
      <div className="col">
        <Subrating category="Location" rating={props.ratings.location} />
      </div>
      <div className="col">
        <Subrating category="Value" rating={props.ratings.value} />
      </div>
    </div>
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
