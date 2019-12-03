import React from 'react';
import { shallow } from 'enzyme';

import Button from './button';

describe('<Button />', () => {
  it('Should call props.onClick when the button is clicked', () => {
    const wrapper = shallow(<Button onClick={() => console.log('Click')} />);
    wrapper.find('button').simulate('click');
  });
});
