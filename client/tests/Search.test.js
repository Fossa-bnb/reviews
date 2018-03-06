import React from 'react';
import { mount } from 'enzyme';

import Search from '../src/components/Search';

describe('<Search /> Component', () => {
  let callbackCounter = 0;
  const callback = () => {
    callbackCounter += 1;
  };
  const wrapper = mount(<Search searchReviews={callback} />);
  it('should execute the callback when the input field is in focus and enter is pressed', () => {
    wrapper.find('input').simulate('focus').simulate('keyUp', { keyCode: 13 });
    expect(callbackCounter).toBe(1);
    wrapper.find('input').simulate('focus').simulate('keyUp', { keyCode: 1 });
    expect(callbackCounter).toBe(1);
  });
});
