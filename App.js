// frontend/src/App.js
import React from 'react';
import FormEditor from './components/formEditor';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch as RouterSwitch} from 'react-router-dom';

import Form from './backend/routes/models/Form';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:formId" component={FormEditor} />
        <Route path="/models" component={Form} />
     {/* Add more routes for form fill and other functionalities */ }
      </Switch>
    </Router>
  );
};

export default App;
