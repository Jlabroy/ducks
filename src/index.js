import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from "./redux/configure-store";
import Home from './views/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
