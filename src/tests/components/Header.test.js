import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json'; // no need as it's defined in jest.config.json
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify App');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />); // output we're trying to test
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should chall startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
