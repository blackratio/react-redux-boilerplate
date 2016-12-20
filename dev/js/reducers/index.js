import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

// Combine all reducer in one unique big object
const allReducers = combineReducers({
   users: UserReducer,
   activeUser: ActiveUserReducer
});

export default allReducers;
