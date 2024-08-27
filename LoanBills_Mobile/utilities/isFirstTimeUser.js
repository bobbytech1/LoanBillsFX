import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkFirstTimeUser = async () => {
  const isFirstTime = await AsyncStorage.getItem('isFirstTimeUser');
  if (isFirstTime === null) {
    await AsyncStorage.setItem('isFirstTimeUser', 'false');
    return true;
  }
  return false;
};
