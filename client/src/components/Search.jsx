import React from 'react';
import $ from 'jquery';

const Search = ({ searchReviews }) => (
  <div>
    <input
      type="text"
      placeholder="Search reviews"
      onKeyUp={(event) => { if (event.keyCode === 13) { searchReviews($(event.target).val()); } }}
    />
  </div>
);

export default Search;
