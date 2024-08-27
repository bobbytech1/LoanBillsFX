import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  // Load token from AsyncStorage when the app starts
  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const firstTimeUserFlag = await AsyncStorage.getItem('isFirstTimeUser');

        setAuthToken(token);
        if (firstTimeUserFlag === null) {
          setIsFirstTimeUser(true);
          await AsyncStorage.setItem('isFirstTimeUser', 'false');
        } else {
          setIsFirstTimeUser(false);
        }
      } catch (error) {
        console.error("Failed to load auth token:", error);
      } finally {
        setLoading(false);
      }
    };

    loadToken();
  }, []);

  // Handler to set token
  const setAuthTokenHandler = (token) => {
    if (token) {
      setAuthToken(token);
      AsyncStorage.setItem('token', token);
    } else {
      setAuthToken(null);
      AsyncStorage.removeItem('token');
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setAuthTokenHandler, loading, isFirstTimeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
