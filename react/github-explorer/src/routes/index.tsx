import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </BrowserRouter>
  );
};

export default Routes;
