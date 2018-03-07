import React from 'react';
import PropTypes from 'prop-types';
// import { grid } from 'bootstrap-css';
import Subrating from './Subrating';

import styles from '../../styles/style.css';

const Ratings = props => (
  <div styleName="container" className={`${styles.container} allRatings`}>
    <div styleName="row" className={[styles.rating]}>
      <div styleName="col" >
        <Subrating category="Accuracy" rating={props.ratings.accuracy} />
      </div>
      <div styleName="col" >
        <Subrating category="Check In" rating={props.ratings.checkIn} />
      </div>
    </div>
    <div className={[styles.rating, styles.row]}>
      <div className={styles.col}>
        <Subrating category="Cleanliness" rating={props.ratings.cleanliness} />
      </div>
      <div className={styles.col}>
        <Subrating category="Communication" rating={props.ratings.communication} />
      </div>
    </div>
    <div className={[styles.rating, styles.row]}>
      <div className={styles.col}>
        <Subrating category="Location" rating={props.ratings.location} />
      </div>
      <div className={styles.col}>
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
