import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

// This would be the place to rehydrate the store by information passed down by the server or local storage. It will override the reducers default values
const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
);
