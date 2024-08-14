import { View, Text, Button, Alert } from 'react-native'
import { AuthContext } from '../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react'
import { router } from 'expo-router';

const WalletTab = () => {
  const { setAuthToken } = useContext(AuthContext);

  const handleManualLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('loginTime');
      setAuthToken(null); // Clear token in context
      router.replace('sign-in'); // Navigate to login screen
    } catch (error) {
      console.error('Error logging out', error);
    }
  };
  return (
    <SafeAreaView>
      <View>
      <Button title="Logout" onPress={handleManualLogout} />
    </View>
    </SafeAreaView>
  )
}

export default WalletTab