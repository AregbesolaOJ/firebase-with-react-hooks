import React, { useState } from 'react';
import { AuthProvider } from 'contexts/AuthContext';
import firebase from 'firedb';
import Router from './Router';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            }
        });
    }, [isLoggedIn])

  return (
      <AuthProvider value={{ isLoggedIn, setIsLoggedIn }}>
          <Router />
      </AuthProvider>
  );
};
export default App;
