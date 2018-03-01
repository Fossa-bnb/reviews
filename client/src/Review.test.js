import React from 'react';
import { mount } from 'enzyme';

import Review from './components/Review';

describe('<Subrating /> Component', () => {
  const reviewObj = {
    reviewId: 1,
    roomId: 24,
    userId: 87,
    userName: 'Lucille',
    userPhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/zforrester/128.jpg',
    text: 'Sint doloribus et minus molestias possimus beatae sint. Et architecto unde perspiciatis. Ea fugiat esse.',
    date: 'May 2016',
  };
  const wrapper = mount(<Review review={reviewObj} />);

  it('should receieve the review object as a prop', () => {
    expect(wrapper.prop('review')).toEqual(reviewObj);
  });
  it('should render the user photo', () => {
    expect(wrapper.find('img').prop('src')).toEqual('https://s3.amazonaws.com/uifaces/faces/twitter/zforrester/128.jpg');
  });
  it('should render the user name and date of the review', () => {
    expect(wrapper.find('span .username').text()).toEqual('Lucille');
    expect(wrapper.find('span .reviewDate').text()).toEqual('May 2016');
  });
  it('should render the text of the review', () => {
    expect(wrapper.find('.text').text()).toEqual('Sint doloribus et minus molestias possimus beatae sint. Et architecto unde perspiciatis. Ea fugiat esse.');
  });
});
