import React from 'react';
import { render, screen } from '@testing-library/react';
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

  test('Check for heading in the navbar \'Guess\' is in the document', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(
      screen.getByRole('heading', { name: /Guess/ }),
    ).toBeInTheDocument();
  });

  test('Check for heading in the navbar \'Blur\' is in the document', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(
      screen.getByRole('heading', { name: /home/i }),
    ).toBeInTheDocument();
  });
});
