import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

const Search = ({ searchReviews }) => (
  <div>
    <input
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
