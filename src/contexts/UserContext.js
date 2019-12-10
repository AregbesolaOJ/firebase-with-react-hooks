import React, { useContext, useReducer } from 'react';
import rootReducer from 'reducers';
import PropTypes from 'prop-types';

const userContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [store, dispatch] = useReducer(rootReducer, {});
  return (
    <userContext.Provider value={{ store, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export const useStoreValue = () => useContext(userContext);

export default userContext;

UserProvider.propTypes = {
  children: PropTypes.any
};
