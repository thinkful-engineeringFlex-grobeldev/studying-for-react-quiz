import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import Button from './button';

describe('<Button />', () => {
  it('Should call props.onClick when the button is clicked', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}></Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
