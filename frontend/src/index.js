import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WorkoutsContextProvider } from './context/WorkoutsContext';

ReactDOM.render(
  
    <WorkoutsContextProvider>
      <BrowserRouter>
        <App />
      
      </BrowserRouter>
    </WorkoutsContextProvider>,
  document.getElementById('root')
);
