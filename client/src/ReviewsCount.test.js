import React from 'react';
import { shallow, mount } from 'enzyme';

import ReviewsCount from './components/ReviewsCount';

describe('<ReviewsCount /> Component', () => {
  it('should render a reviewsCount component', () => {
    const wrapper = shallow(<ReviewsCount count={5} />);
    expect(wrapper.hasClass('ReviewsCount')).toBe(true);
  });
  it('should receive the reviewsCount as a prop', () => {
    const wrapper = mount(<ReviewsCount count={5} />);
    expect(wrapper.prop('count')).toEqual(5);
  });
  it('should render the number of reviews', () => {
    const wrapper = mount(<ReviewsCount count={3} />);
    expect(wrapper.find('div').text()).toEqual('3 Reviews');
  });
});
