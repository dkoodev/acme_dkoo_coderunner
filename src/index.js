import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import "babel-polyfill";
// import progress_tracker from 'progress-tracker';
// import 'antd/dist/antd.css';
import './assets/css/mystyles.scss';
import './assets/css/styles.css';


// import './assets/images/logo.png'
// import 'bulma/css/bulma.min.css';

// import 'animate.css/animate.min.css';

render( <App />, document.getElementById('app') );
