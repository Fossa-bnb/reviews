import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/style.css';

const Review = props => (
  <div className={styles.review}>
    <div className={styles.reviewhead} >
      <img className={styles.profilePhoto} src={props.review.userPhoto} alt="user" />
      <div className={styles.reviewinfo}>
        <span className={styles.username} >{props.review.userName}</span>
        <span className={styles.reviewDate} >{props.review.date}</span>
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
