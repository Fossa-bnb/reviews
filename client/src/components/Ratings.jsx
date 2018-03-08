import React from 'react';
import PropTypes from 'prop-types';
import Subrating from './Subrating';
import styles from '../../styles/style.css';

const Ratings = props => (
  <div className={styles.ratings} >
    <div className={styles.ratingcolumn} >
      <Subrating category="Accuracy" rating={props.ratings.accuracy} />
      <Subrating category="Check In" rating={props.ratings.checkIn} />
      <Subrating category="Value" rating={props.ratings.value} />
    </div>
    <div className={styles.ratingcolumn}>
      <Subrating category="Cleanliness" rating={props.ratings.cleanliness} />
      <Subrating category="Communication" rating={props.ratings.communication} />
      <Subrating category="Location" rating={props.ratings.location} />

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
