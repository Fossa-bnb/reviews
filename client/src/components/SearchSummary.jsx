import React from 'react';
import PropTypes from 'prop-types';

const SearchSummary = ({ numberOfResults, params, resetSearch }) => (
  <div className="searchSummary">
    {numberOfResults} guests have mentioned <span className="params">{params}</span>
    <span
      className="backToReviews"
      onClick={() => resetSearch()}
      onKeyUp={() => resetSearch()}
      role="button"
      tabIndex="0"
    >Back to all reviews
    </span>
  </div>
);

SearchSummary.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
  params: PropTypes.string.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

export default SearchSummary;
