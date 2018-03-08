import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/style.css';

const SearchSummary = ({ numberOfResults, params, resetSearch }) => {
  if (numberOfResults === 0) {
    return (
      <div className={[styles.container, styles.searchSummary]}>
        <div className={[styles.row, styles.summaryText, 'justify-content-between']}>
          <div className={['col-s-2', styles.searchResultsSummary]}>
            None of our guests have mentioned
            <span className={styles.params}> &quot;{params}&quot;</span>
          </div>
          <div className="col-s-2">
            <span
              className={styles.backToReviews}
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
      <div className={[styles.container, styles.searchSummary]}>
        <div className={[styles.row, styles.summaryText, 'justify-content-between']}>
          <div className={['col-s-2', styles.searchResultsSummary]}>
            {numberOfResults} guest has mentioned
            <span className={styles.params}> &quot;{params}&quot;</span>
          </div>
          <div className="col-s-2">
            <span
              className={styles.backToReviews}
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
    <div className={styles.searchSummary}>
      <div>
        {numberOfResults} guests have mentioned
        <span className={styles.params}> &quot;{params}&quot;</span>
      </div>
      <div>
        <span
          className={styles.backToReviews}
          onClick={() => resetSearch()}
          onKeyUp={() => resetSearch()}
          role="button"
          tabIndex="0"
        >Back to all reviews
        </span>
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
