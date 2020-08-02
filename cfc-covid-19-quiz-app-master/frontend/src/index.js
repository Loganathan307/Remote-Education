import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QApp from './QApp';
import Reg from './Reg';
import Login from './Login';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

ReactDOM.render(
    <Provider store={store}>
       
         
        <QApp/>
       
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
