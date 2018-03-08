import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import styles from '../../styles/style.css';

const Subrating = (props) => {
  const roundedStars = Math.round(props.rating * 2) / 2;

  return (
    <div className={styles.subrating}>
      <div className={styles.col6}>{props.category}</div>
      <div className={styles.col4}> <ReactStars
        count={5}
        edit={false}
        half
        value={roundedStars}
        size={20}
        color1="#D8D8D8"
        color2="#008489"
      />
      </div>
    </div>
  );
};

Subrating.propTypes = {
  category: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Subrating;
