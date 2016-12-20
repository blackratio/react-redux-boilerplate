import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require('./app.scss');

const App = () => (
   <div>
      <h2>Users list name</h2>
      <UserList />
      <h2>Users list details</h2>
      <UserDetail />
   </div>
);

export default App;
