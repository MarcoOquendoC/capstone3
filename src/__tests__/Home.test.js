import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../components/Home';

test('Home test', async () => {
  const home = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(home).toMatchSnapshot();
});
