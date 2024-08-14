import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  // Handler to set token
  const setAuthTokenHandler = (token) => {
    if (token) {
      setAuthToken(token);
    } else {
      setAuthToken(null);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setAuthTokenHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
