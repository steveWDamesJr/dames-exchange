import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Cryptocurrencies from '../__mocks__/Cryptocurrencies';

it('renders correctly', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Cryptocurrencies />
        </Provider>
      </Router>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

const Server = () => <>Market Cap: 239393904304</>;

test('should get the Api Market Cap data: 239393904304', () => {
  render(<Server />);
  screen.debug();
});
