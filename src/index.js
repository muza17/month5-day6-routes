import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {LangProvider} from "./Context/LangContext"
import App from './App';
import { AuthProvider } from './Context/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LangProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </LangProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

