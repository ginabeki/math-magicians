import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/pages/Quotes';

it('renders home page correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
