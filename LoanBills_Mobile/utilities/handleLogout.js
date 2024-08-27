// hooks/useLogout.js
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';
import { router } from 'expo-router';

const useLogout = () => {
  const { setAuthToken } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('loginTime');
      setAuthToken(null); // Clear token in context
      router.replace('sign-in'); // Navigate to login screen
    } catch (error) {
      console.error('Error logging out', error);
    }
  };
  

  return handleLogout;
};

export default useLogout;
