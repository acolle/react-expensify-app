import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json'; // no need as it's defined in jest.config.json
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify App');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />); // output we're trying to test
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
