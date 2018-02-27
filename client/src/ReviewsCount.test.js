import React from 'react';
import { shallow, mount } from 'enzyme';

import ReviewsCount from './components/ReviewsCount';

describe('<ReviewsCount /> Component', () => {
  it('should render a reviewsCount component', () => {
    const wrapper = shallow(<ReviewsCount roomId={5} />);
    expect(wrapper.hasClass('ReviewsCount')).toBe(true);
  });
  it('should receive the roomId as a prop', () => {
    const wrapper = mount(<ReviewsCount roomId={5} />);
    expect(wrapper.prop('roomId')).toEqual(5);
  });
});
