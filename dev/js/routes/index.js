import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import HomePage from '../components/homepage';
import Test from '../components/test';

export default (
   <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="test" component={Test}/>
   </Route>
);
