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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.roomId,
      reviews: null,
      ratings: null,
      searchResults: null,
      searchParams: null,
      allReviews: null
    };
    this.searchReviews = this.searchReviews.bind(this);
  }

  componentDidMount() {
    axios.get(`/rooms/${this.state.roomId}/reviews`)
      .then((response) => {
        this.setState({ allReviews: response.data.reviewsList });
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
      if (review.text.includes(filter)) {
        results.push(review);
      }
    });
    this.setState({ reviews: results });
    this.setState({ searchResults: true });
  }

  render() {
    if (this.state.reviews && this.state.ratings) {
      return (
        <div className="reviews">
          Listing id: {this.state.roomId}
          <ReviewsCount roomId={this.state.roomId} count={this.state.allReviews.length} />
          <OverallStars stars={this.state.ratings.overall} />
          <Search roomId={this.state.roomId} searchReviews={this.searchReviews} />
          <Ratings roomId={this.state.roomId} ratings={this.state.ratings} />
          <ReviewsList reviews={this.state.reviews} searchResults={this.state.searchResults} searchParams={this.state.searchParams} />
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
