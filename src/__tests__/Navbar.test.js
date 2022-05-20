import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NavbarMock from '../__mocks__/NavbarMock';

const Navbar = () => <>Home</>;

test('should display the nav text Home', () => {
  render(<Navbar />);
  screen.debug();
});

it('renders correctly', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <NavbarMock />
        </Provider>
      </Router>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
