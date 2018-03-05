import React from 'react';
import { mount, shallow } from 'enzyme';

import SearchSummary from '../src/components/SearchSummary';

describe('<SearchSummary /> Component', () => {
  let clickCounter = 0;
  const resetSearch = () => {
    clickCounter += 1;
  };
  const wrapper = mount(<SearchSummary
    numberOfResults={1}
    params="family"
    resetSearch={resetSearch}
  />);
  it('should receive the numberOfResults and search parameters as props', () => {
    expect(wrapper.prop('numberOfResults')).toBe(1);
    expect(wrapper.prop('params')).toBe('family');
  });
  it('should properly format the search summary text', () => {
    expect(wrapper.find('.searchResultsSummary').text()).toEqual('1 guest has mentioned "family"');
  });
  it('should execute resetSearch when a user clicks on the back to reviews text', () => {
    wrapper.find('.backToReviews').first().simulate('click');
    expect(clickCounter).toEqual(1);
  });
  it('should execute resetSearch when a user presses a key when back to reviews text is in focus', () => {
    wrapper.find('.backToReviews').first().simulate('keyUp');
    expect(clickCounter).toEqual(2);
  });
  it('should a functional summary component when 0 results are found', () => {
    const shallowWrapper = shallow(<SearchSummary
      numberOfResults={0}
      params="Annisa"
      resetSearch={resetSearch}
    />);
    expect(shallowWrapper.find('.searchResultsSummary').text()).toEqual('None of our guests have mentioned "Annisa"');
    shallowWrapper.find('.backToReviews').first().simulate('click');
    expect(clickCounter).toEqual(3);
    shallowWrapper.find('.backToReviews').first().simulate('keyUp');
    expect(clickCounter).toEqual(4);
  });
  it('should a functional summary component when multiple results iare found', () => {
    const shallowWrapper = shallow(<SearchSummary
      numberOfResults={8}
      params="Annisa"
      resetSearch={resetSearch}
    />);
    expect(shallowWrapper.find('.searchResultsSummary').text()).toEqual('8 guests have mentioned "Annisa"');
    shallowWrapper.find('.backToReviews').first().simulate('click');
    expect(clickCounter).toEqual(5);
    shallowWrapper.find('.backToReviews').first().simulate('keyUp');
    expect(clickCounter).toEqual(6);
  });
});
