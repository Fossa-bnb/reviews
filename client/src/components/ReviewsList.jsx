import React from 'react';
// import PropTypes from 'prop-types';

// import Review from './Review';
// import Navigation from './Navigation';

class ReviewsList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // page: 1,
  //     // reviews: this.props.reviews,
  //     // displayedReviews: this.props.reviews.slice(0, 7),
  //   };
    // this.updateCurrentPage = this.updateCurrentPage.bind(this);
  // }

  // updateCurrentPage(newPage) {
  //   this.setState({ page: newPage }, () => {
  //     this.updateDisplayedReviews();
  //   });
  // }

  // updateDisplayedReviews() {
  //   const startIndex = (this.state.page - 1) * 7;
  //   const endIndex = startIndex + 7;
  //   this.setState({ displayedReviews: this.state.reviews.slice(startIndex, endIndex) });
  // }

  render() {
    return <h1>Hello</h1>;

  //   return (
      // <div id="review">
      //   {this.state.displayedReviews.map(review => (
      //     <Review review={review} key={review.reviewId} />
      // ))}
      //   <Navigation
      //     pages={Math.ceil(this.state.reviews.length / 7)}
      //     clickHandler={this.updateCurrentPage}
      //   />
      // </div>
    // );
  }
}

// ReviewsList.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.shape({
//     reviewId: PropTypes.number,
//     roomId: PropTypes.number,
//     userId: PropTypes.number,
//     userName: PropTypes.string,
//     userPhoto: PropTypes.string,
//     text: PropTypes.string,
//     date: PropTypes.date,
//   })).isRequired,
// };

export default ReviewsList;
