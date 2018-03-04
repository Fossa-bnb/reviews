import React from 'react';
import { mount } from 'enzyme';

import OverallStars from '../src/components/OverallStars';

describe('<OverallStars /> Component', () => {
  const wrapper = mount(<OverallStars stars={3.74} />);
  it('should receieve the overall stars as a prop', () => {
    expect(wrapper.prop('stars')).toEqual(3.74);
  });
  it('should properly round the overall stars to the nearest .5 value', () => {
    const roundedStars = Math.round(wrapper.prop('stars') * 2) / 2;
    expect(roundedStars).toEqual(3.5);
  });
  it('should render a ReactStars component with the rounded number of stars', () => {
    expect(wrapper.find('ReactStars').prop('value')).toEqual(3.5);
  });
});
