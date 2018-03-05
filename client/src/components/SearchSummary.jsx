import React from 'react';
import PropTypes from 'prop-types';

const SearchSummary = ({ numberOfResults, params, resetSearch }) => {
  if (numberOfResults === 0) {
    return (
      <div className="container searchSummary">
        <div className="row justify-content-between summaryText">
          <div className="col-s-2">
            None of our guests have mentioned <span className="params">&quot;{params}&quot;</span>
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
  } else if (numberOfResults === 1) {
    return (
      <div className="container searchSummary">
        <div className="row justify-content-between summaryText">
          <div className="col-s-2">
            {numberOfResults} guest has mentioned <span className="params">&quot;{params}&quot;</span>
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
  }
  return (
    <div className="container searchSummary">
      <div className="row justify-content-between summaryText">
        <div className="col-s-2">
          {numberOfResults} guests have mentioned <span className="params">&quot;{params}&quot;</span>
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
};

SearchSummary.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
  params: PropTypes.string.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

export default SearchSummary;
