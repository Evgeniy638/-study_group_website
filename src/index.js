import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux"
import store from './bll/store';

ReactDOM.render(
  <HashRouter>
    <Provider store = {store}>
      <AppContainer/>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
