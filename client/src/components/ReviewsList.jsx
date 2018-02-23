import React from 'react';

import Review from './Review';
import Navigation from './Navigation';

const ReviewsList = () => (
  <div>
    <Review reviewId={1} />
    <Review reviewId={2} />

    <Navigation />
  </div>
);

export default ReviewsList;
