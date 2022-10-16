import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>,
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
