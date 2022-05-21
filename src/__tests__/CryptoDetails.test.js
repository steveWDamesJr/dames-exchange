import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CryptoDetails from '../__mocks__/CryptoDetails';

it('renders correctly', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <CryptoDetails />
        </Provider>
      </Router>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

const Server = () => <>Bitcoin is the first decentralized digital currency.</>;

test('should get the Api description: Bitcoin is the first decentralized digital currency.', () => {
  render(<Server />);
  screen.debug();
});
