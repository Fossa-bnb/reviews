import React from 'react';
import { mount } from 'enzyme';

import App from '../src/components/App';

describe('<App /> Component', () => {
  const wrapper = mount(<App roomId={3} />);
  const review1 = {
    reviewId: 1,
    roomId: 24,
    userId: 87,
    userName: 'Lucille',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/zforrester/128.jpg',
    text: 'I had a great stay here',
    date: 'May 2016',
  };
  const review2 = {
    reviewId: 2,
    roomId: 24,
    userId: 27,
    userName: 'Oscar',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg',
    text: 'The host treated us like family!',
    date: 'June 2011',
  };
  const review3 = {
    reviewId: 3,
    roomId: 24,
    userId: 66,
    userName: 'Buster',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'This is a great place, I recommend staying here',
    date: 'January 2018',
  };
  const review4 = {
    reviewId: 4,
    roomId: 24,
    userId: 66,
    userName: 'Gob',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'The place was clean and quiet. We had an awesome time!',
    date: 'January 2018',
  };
  const review5 = {
    reviewId: 5,
    roomId: 24,
    userId: 66,
    userName: 'Michael',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'I love staying here. This is our third time.',
    date: 'January 2018',
  };
  const review6 = {
    reviewId: 6,
    roomId: 24,
    userId: 66,
    userName: 'Lindsay',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'For the location, this listing is a great value.',
    date: 'January 2018',
  };
  const review7 = {
    reviewId: 7,
    roomId: 24,
    userId: 66,
    userName: 'George-Michael',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'The host was not home much when we visited, but we still enjoyed our stay.',
    date: 'January 2018',
  };
  const review8 = {
    reviewId: 8,
    roomId: 24,
    userId: 66,
    userName: 'Tobias',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',
    text: 'This is my first time staying at an airbnb and I had a wonderful time',
    date: 'January 2018',
  };
  const reviewsList = [review1, review2, review3, review4, review5, review6, review7, review8];
  it('should render a loading message before informaton from database is received', () => {
    expect(wrapper.text()).toBe('Loading..');
  });
  it('should render all of the correct subcomponents when state is loaded', () => {
    wrapper.setState({
      roomId: 3,
      reviews: reviewsList,
      ratings: {
        accuracy: 2.210526315789474,
        checkIn: 1.9473684210526316,
        cleanliness: 1.9210526315789473,
        communication: 2.1842105263157894,
        location: 1.736842105263158,
        overall: 2.030701754385965,
        value: 2.1842105263157894,
      },
      searchResults: null,
      searchParams: null,
    });
    expect(wrapper.find('ReviewsCount')).toHaveLength(1);
    expect(wrapper.find('OverallStars')).toHaveLength(1);
    expect(wrapper.find('Search')).toHaveLength(1);
    expect(wrapper.find('Ratings')).toHaveLength(1);
    expect(wrapper.find('ReviewsList')).toHaveLength(1);
  });
  it('should render all of the correct subcomponents after a search is performed', () => {
    wrapper.setState({
      searchResults: [],
      searchParams: 'Nihil',
    });
    expect(wrapper.find('ReviewsCount')).toHaveLength(1);
    expect(wrapper.find('OverallStars')).toHaveLength(1);
    expect(wrapper.find('Search')).toHaveLength(1);
    expect(wrapper.find('SearchSummary')).toHaveLength(1);
    expect(wrapper.find('ReviewsList')).toHaveLength(1);
  });
  it('should receieve a roomId as a prop', () => {
    expect(wrapper.prop('roomId')).toBe(3);
  });
  // it('should find the correct subset of reviews on a search', () => {
  //   wrapper.instance().searchReviews('great');
  //   expect(wrapper.state('searchParams')).toBe('great');
  //   expect(wrapper.state('searchResults')).toEqual([review1, review3, review6]);
  // });
  it('should reset the state when resetSearch is called', () => {
    wrapper.instance().resetSearch();
    expect(wrapper.state('searchParams')).toBe(null);
    expect(wrapper.state('searchResults')).toBe(null);
    expect(wrapper.find('input').text()).toBe('');
  });
});
