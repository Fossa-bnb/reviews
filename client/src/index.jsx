import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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
    };
  }
  render() {
    return (
      <div className="reviews">
        Listing id: {this.state.roomId}
        <ReviewsCount /> <OverallStars /> <Search />
        <Ratings />
        <ReviewsList />
      </div>
    );
  }
}

App.propTypes = {
  roomId: PropTypes.number.isRequired,
};

ReactDOM.render(
  <App roomId={1} />,
  document.getElementById('app'),
);
