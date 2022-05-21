import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';

it('renders correctly', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
