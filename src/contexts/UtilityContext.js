// Tried playing with this context file for a use case that covers having multiple reducers
// in one global store, the kind of middleware redux provides when we call 'combineReducers'


// import React, { useContext, useReducer } from 'react';
// import rootReducer from 'reducers';
// import PropTypes from 'prop-types';

// const userContext = React.createContext({});

// export const UserProvider = ({ children }) => {
//   const [store, dispatch] = useReducer(rootReducer, {});
//   return (
//     <userContext.Provider value={{ store, dispatch }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export const useStoreValue = () => useContext(userContext);

// export default userContext;

// UserProvider.propTypes = {
//   children: PropTypes.any
// };
