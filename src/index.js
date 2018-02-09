import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
