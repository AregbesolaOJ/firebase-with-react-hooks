import React, { useState } from 'react';
// import { AuthProvider } from 'contexts/AuthContext';
import Router from './Router';

const App = () => {
  const [state, setState] = useState({
    isLoggedIn: false
  });

  return (
    // <AuthProvider value={state.isLoggedIn}>
      <Router />
    // </AuthProvider>
  );
};
export default App;
