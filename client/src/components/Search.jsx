import React from 'react';
import $ from 'jquery';

const Search = ({ updateSearchParams }) => (
  <div>
    <input
      type="text"
      placeholder="Search reviews"
      onKeyUp={(event) => { if (event.keyCode === 13) { updateSearchParams($(event.target).val()); } }}
    />
  </div>
);

export default Search;
