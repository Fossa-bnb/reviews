import React from 'react';
import PropTypes from 'prop-types';

const SearchSummary = ({ numberOfResults, params, resetSearch }) => (
  <div className="container searchSummary">
    <div className="row justify-content-between">
      <div className="col-s-2">
        {numberOfResults} guests have mentioned <span className="params">{params}</span>
      </div>
      <div className="col-s-2">
        <span
          className="backToReviews"
          onClick={() => resetSearch()}
          onKeyUp={() => resetSearch()}
          role="button"
          tabIndex="0"
        >Back to all reviews
        </span>
      </div>
    </div>
  </div>
);

SearchSummary.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
  params: PropTypes.string.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

export default SearchSummary;
