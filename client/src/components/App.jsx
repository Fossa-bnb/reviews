import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import styles from '../../styles/style.css';

import Ratings from './Ratings';
import ReviewsList from './ReviewsList';
import ReviewsCount from './ReviewsCount';
import OverallStars from './OverallStars';
import Search from './Search';
import SearchSummary from './SearchSummary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.id,
      reviews: null,
      ratings: null,
      searchResults: null,
      searchParams: null,
    };
    this.searchReviews = this.searchReviews.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentDidMount() {
    const portNumber = process.env.PORT;
    const host = process.env.HOST;
    axios({
      method: 'get',
      url: `http://${host}:${portNumber}/rooms/${this.state.roomId}/reviews`,
      responseType: 'stream',
    })
      .then((response) => {
        this.setState({ reviews: response.data.reviewsList });
        this.setState({ ratings: response.data.ratings });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchReviews(filter) {
    this.setState({ searchParams: filter });
    $('input').addClass('activeSearchInput');
    const results = [];
    this.state.reviews.forEach((review) => {
      if (review.text.toLowerCase().includes(filter.toLowerCase())) {
        results.push(review);
      }
    });
    this.setState({ searchResults: results });
  }

  resetSearch() {
    this.setState({ searchParams: null });
    this.setState({ searchResults: null });
    $('input').val('');
  }

  render() {
    if (this.state.searchResults) {
      return (
        <div className="review">
          <div className={styles.headercontainer}>
            <div className={styles.roomsummary} >
              <ReviewsCount roomId={this.state.roomId} count={this.state.reviews.length} />
              <OverallStars stars={this.state.ratings.overall} />
            </div>
            <Search roomId={this.state.roomId} searchReviews={this.searchReviews} />
          </div>
          <SearchSummary
            numberOfResults={this.state.searchResults.length}
            params={this.state.searchParams}
            resetSearch={this.resetSearch}
          />
          <ReviewsList reviews={this.state.searchResults} />
        </div>
      );
    } else if (this.state.reviews && this.state.ratings) {
      return (
        <div className="review">
          <div className={styles.headercontainer}>
            <div className={styles.roomsummary} >
              <ReviewsCount roomId={this.state.roomId} count={this.state.reviews.length} />
              <OverallStars stars={this.state.ratings.overall} />
            </div>
            <Search roomId={this.state.roomId} searchReviews={this.searchReviews} />
          </div>
          <Ratings roomId={this.state.roomId} ratings={this.state.ratings} />
          <ReviewsList reviews={this.state.reviews} />
        </div>
      );
    }
    return <div>Loading..</div>;
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
};

window.Reviews = App;

export default App;
