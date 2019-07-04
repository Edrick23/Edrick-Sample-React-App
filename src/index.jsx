import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from '../src/containers/App';
import './index.css';
// import '../node_modules/primereact/resources/themes/nova-light/theme.css';
// import '../node_modules/primereact/resources/primereact.min.css';
// import '../node_modules/primeicons/primeicons.css';
// \import '../node_modules/primereact/resources/primereact.css';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);  