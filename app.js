
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormEditor from './components/FormEditor';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:formId" component={FormEditor} />
       </Switch>
    </Router>
  );
};

export default App;
