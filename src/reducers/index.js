// My schema for combining multiple reducers into one root reducer

import userReducer from './user.reducer';
import authReducer from './auth.reducer';

const rootReducer = ({ user, auth }, action) => ({
  user: userReducer(user, action),
  auth: authReducer(auth, action)
});

export default rootReducer;
