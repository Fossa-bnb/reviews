import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/style.css';

const Review = props => (
  <div className={`${styles.container} review`}>
    <div className={[styles.container, styles.user]} >
      <div className={styles.row}>
        <div className={styles.colS2}>
          <img className={styles.profilePhoto} src={props.review.userPhoto} alt="user" />
        </div>
        <div className="col">
          <div className={styles.row}>
            <span className={styles.username} >{props.review.userName}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.reviewDate} >{props.review.date}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text">
      {props.review.text}
    </div>
  </div>
);

Review.propTypes = {
  review: PropTypes.shape({
    reviewId: PropTypes.number,
    roomId: PropTypes.number,
    userId: PropTypes.number,
    userName: PropTypes.string,
    userPhoto: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default Review;
