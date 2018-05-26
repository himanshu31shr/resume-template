import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;
import bootstrap from 'bootstrap';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { BrowserRouter, Switch } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
		  <App />
	    </Switch>
	</BrowserRouter>,
  document.getElementById('root')
);