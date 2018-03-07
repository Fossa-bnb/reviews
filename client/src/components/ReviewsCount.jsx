import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/style.css';

const ReviewsCount = props => (
  <div className={styles.ReviewsCount} >
    {props.count} Reviews
  </div>
);

ReviewsCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ReviewsCount;

