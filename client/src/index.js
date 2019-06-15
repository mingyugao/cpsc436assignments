import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
