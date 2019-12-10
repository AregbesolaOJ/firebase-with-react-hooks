import React from 'react';

const authContext = React.createContext(false);
export const { Consumer: AuthConsumer, Provider: AuthProvider } = authContext;
export default authContext;
