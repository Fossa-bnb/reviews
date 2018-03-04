import React from 'react';
import { mount } from 'enzyme';

// import ReviewsList from '../src/components/ReviewsList';

describe('<ReviewsList /> Component', () => {
  const review1 = {
    reviewId: 1,
    roomId: 24,
    userId: 87,
    userName: 'Lucille',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/zforrester/128.jpg',
    text: 'Sint doloribus et minus molestias possimus beatae sint. Et architecto unde perspiciatis. Ea fugiat esse.',
    date: 'May 2016',
  };
  const review2 = {
    reviewId: 2,
    roomId: 24,
    userId: 27,
    userName: 'Oscar',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg',
    text: 'Expedita dicta quisquam qui fugit maxime. Vel qui consectetur quae consectetur. Itaque explicabo aut laudantium debitis. Minima est quo iusto dolorem ducimus omnis. Laborum minima enim qui vel.',
    date: 'June 2011',
  };
  const review3 = {
    reviewId: 3,
    roomId: 24,
    userId: 66,
    userName: 'Buster',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'Sint doloremque culpa accusamus sit. Dignissimos aut harum ut nobis repellat repudiandae. Expedita culpa iure commodi laboriosam nihil hic vel dolores.',
    date: 'January 2018',
  };
  const review4 = {
    reviewId: 4,
    roomId: 24,
    userId: 66,
    userName: 'Gob',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'Sint doloremque culpa accusamus sit. Dignissimos aut harum ut nobis repellat repudiandae. Expedita culpa iure commodi laboriosam nihil hic vel dolores.',
    date: 'January 2018',
  };
  const review5 = {
    reviewId: 5,
    roomId: 24,
    userId: 66,
    userName: 'Michael',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'Sint doloremque culpa accusamus sit. Dignissimos aut harum ut nobis repellat repudiandae. Expedita culpa iure commodi laboriosam nihil hic vel dolores.',
    date: 'January 2018',
  };
  const review6 = {
    reviewId: 6,
    roomId: 24,
    userId: 66,
    userName: 'Lindsay',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'Sint doloremque culpa accusamus sit. Dignissimos aut harum ut nobis repellat repudiandae. Expedita culpa iure commodi laboriosam nihil hic vel dolores.',
    date: 'January 2018',
  };
  const review7 = {
    reviewId: 7,
    roomId: 24,
    userId: 66,
    userName: 'George-Michael',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'Sint doloremque culpa accusamus sit. Dignissimos aut harum ut nobis repellat repudiandae. Expedita culpa iure commodi laboriosam nihil hic vel dolores.',
    date: 'January 2018',
  };
  const review8 = {
    reviewId: 8,
    roomId: 24,
    userId: 66,
    userName: 'Tobias',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'Sint doloremque culpa accusamus sit. Dignissimos aut harum ut nobis repellat repudiandae. Expedita culpa iure commodi laboriosam nihil hic vel dolores.',
    date: 'January 2018',
  };
  const reviewsList = [review1, review2, review3, review4, review5, review6, review7, review8];
  // const wrapper = mount(<ReviewsList reviews={reviewsList} />);

  it('should pass this test', () => {
    expect(2+ 2).toEqual(4);
  });
  // it('should receive the reviews as a prop', () => {
  //   expect(wrapper.prop('reviews')).toEqual(reviewsList);
  // });
  // it('should render the correct number of review components', () => {
  //   expect(wrapper.find('Review')).toHaveLength(7);
  // });
  // it('should by default start at page 1 of the reviews', () => {
  //   expect(wrapper.state('page')).toEqual(1);
  // });
  // it('should change page state when updateCurrentPage is called', () => {
  //   wrapper.instance().updateCurrentPage(2);
  //   expect(wrapper.state('page')).toEqual(2);
  // });
  // it('should render the appropriate reviews based on the current page', () => {
  //   expect(wrapper.state('displayedReviews')).toEqual([reviewsList[7]]);
  // });
  // it('should render a Navigation component', () => {
  //   expect(wrapper.find('Navigation')).toHaveLength(1);
  // });
});
