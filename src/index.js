import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

import Basket from './Basket';
import AddGoodForm from './AddGoodForm';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/basket" component={Basket}/>
      <Route path="/adding-form" component={AddGoodForm}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
