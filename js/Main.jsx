import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
require("font-awesome-webpack");

ReactDOM.render(<Routes/>, document.getElementById('app'));
