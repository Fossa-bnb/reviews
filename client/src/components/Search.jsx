import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import styles from '../../styles/style.css';

const Search = ({ searchReviews }) => (
  <div>
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search reviews"
      onKeyUp={(event) => { if (event.keyCode === 13) { searchReviews($(event.target).val()); } }}
    />
  </div>
);

Search.propTypes = {
  searchReviews: PropTypes.func.isRequired,
};

export default Search;
