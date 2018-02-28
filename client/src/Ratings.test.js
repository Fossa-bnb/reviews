import React from 'react';
import { mount, shallow } from 'enzyme';

import Ratings from './components/Ratings';

describe('<Ratings /> Component', () => {
  const ratingsObj = {
    accuracy: 3.782,
    checkIn: 2.39,
    cleanliness: 4.33,
    communication: 4.98,
    location: 2.11,
    value: 4.12,
  };


  it('should receive the ratings object as a prop', () => {
    const wrapper = mount(<Ratings ratings={ratingsObj} />);
    expect(wrapper.prop('ratings')).toBeDefined();
  });
  it('should render six Subrating components', () => {
    const wrapper = mount(<Ratings ratings={ratingsObj} />);
    expect(wrapper.find('.subrating')).toHaveLength(6);
  });
  it('should pass down each subrating to the appropriate subcomponent', () => {
    const wrapper = shallow(<Ratings ratings={ratingsObj} />);
    expect(wrapper.find('Subrating').at(0).prop('rating')).toEqual(3.782);
  });
});
