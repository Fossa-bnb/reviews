import React from 'react';
import { mount } from 'enzyme';

import Subrating from './components/Subrating';

describe('<Subrating /> Component', () => {
  const wrapper = mount(<Subrating category="Accuracy" rating={3.74} />);
  it('should receive the category and rating as a prop', () => {
    expect(wrapper.prop('rating')).toEqual(3.74);
    expect(wrapper.prop('category')).toEqual('Accuracy');
  });
  it('should round the rating to the nearest .5 value', () => {
    const roundedStars = Math.round(wrapper.prop('rating') * 2) / 2;
    expect(roundedStars).toEqual(3.5);
  });
  it('should include the category in the component', () => {
    expect(wrapper.find('div .subrating').text()).toContain('Accuracy');
  });
  it('should render a ReactStars component with the rounded number of stars', () => {
    expect(wrapper.find('ReactStars').prop('value')).toEqual(3.5);
  });
});
