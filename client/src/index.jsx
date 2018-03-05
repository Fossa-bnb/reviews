import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'bootstrap';

import Ratings from './components/Ratings';
import ReviewsList from './components/ReviewsList';
import ReviewsCount from './components/ReviewsCount';
import OverallStars from './components/OverallStars';
import Search from './components/Search';
import SearchSummary from './components/SearchSummary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.roomId,
      reviews: null,
      ratings: null,
      searchResults: null,
      searchParams: null,
    };
    this.searchReviews = this.searchReviews.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentDidMount() {
    axios.get(`/rooms/${this.state.roomId}/reviews`)
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
    const results = [];
    this.state.reviews.forEach((review) => {
      if (review.text.toLowerCase().includes(filter.toLowerCase())) {
        console.log(review.text, filter);
        results.push(review);
      }
    });
    this.setState({ searchResults: results });
  }

  resetSearch() {
    this.setState({ searchParams: null });
    this.setState({ searchResults: null });
  }

  render() {
    if (this.state.searchResults) {
      return (
        <div className="container reviews">
          <div className="row">
            <div className="col-2">
              <ReviewsCount roomId={this.state.roomId} count={this.state.reviews.length} />
            </div>
            <div className="col">
              <OverallStars stars={this.state.ratings.overall} />
            </div>
            <div className="col-2">
              <Search roomId={this.state.roomId} searchReviews={this.searchReviews} />
            </div>
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
        <div className="container reviews">
          <div className="row">
            <div className="col-2">
              <ReviewsCount roomId={this.state.roomId} count={this.state.reviews.length} />
            </div>
            <div className="col">
              <OverallStars stars={this.state.ratings.overall} />
            </div>
            <div className="col-2">
              <Search roomId={this.state.roomId} searchReviews={this.searchReviews} />
            </div>
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
  roomId: PropTypes.number.isRequired,
};

ReactDOM.render(
  <App roomId={1} />,
  document.getElementById('app'),
);
