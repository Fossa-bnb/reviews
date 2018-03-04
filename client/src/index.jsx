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
      searchParams: null,
      searchResults: null,
    };
    this.updateSearchParams = this.updateSearchParams.bind(this);
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

  updateSearchParams(text) {
    console.log(text);
    console.log(this);
  }

  searchReviews() {
    const results = [];
    this.setState({ searchResults: results });
  }

  render() {
    if (this.state.searchResults && this.state.ratings) {
      return (
        <div className="reviews">
          Listing id: {this.state.roomId}
          <ReviewsCount roomId={this.state.roomId} count={this.state.reviews.length} />
          <OverallStars stars={this.state.ratings.overall} />
          <Search roomId={this.state.roomId} updateSearchParams={this.updateSearchParams} />
          <Ratings roomId={this.state.roomId} ratings={this.state.ratings} />
          <ReviewsList reviews={this.state.searchResults} />
        </div>
      );
    } else if (this.state.reviews && this.state.ratings) {
      return (
        <div className="reviews">
          Listing id: {this.state.roomId}
          <ReviewsCount roomId={this.state.roomId} count={this.state.reviews.length} />
          <OverallStars stars={this.state.ratings.overall} />
          <Search roomId={this.state.roomId} updateSearchParams={this.updateSearchParams} />
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
