import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Homepage from '../__mocks__/Homepage';

it('renders correctly', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </Router>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
