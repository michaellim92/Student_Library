import React from 'react';
import ReactDOM from 'react-dom';
import BrowseRouter from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (<BrowseRouter>
        <App />
    </BrowseRouter>), 
    document.getElementById('root')
);

