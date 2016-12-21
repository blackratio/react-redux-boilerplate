import React from 'react';
import UserDetail from '../containers/user-detail';
import UserList from '../containers/user-list';

require('./app.scss');

const Apps = () => (
   <div>
      <h2>Users list name</h2>
      <UserList />
      <h2>Users list details</h2>
      <UserDetail />
   </div>
);

export default Apps;
