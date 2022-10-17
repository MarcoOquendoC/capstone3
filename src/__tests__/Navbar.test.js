import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
