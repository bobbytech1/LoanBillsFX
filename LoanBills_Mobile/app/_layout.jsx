import { useState, useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { checkFirstTimeUser } from '../utilities/isFirstTimeUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    const initialize = async () => {
      if (error) throw error;

      // Wait for fonts to load first
      if (fontsLoaded) {
        // Hide the splash screen after fonts are loaded
        await SplashScreen.hideAsync();

        // Then check if it's the user's first time
        const firstTime = await checkFirstTimeUser();
        setIsFirstTimeUser(firstTime);

        // Check if user is already logged in
        const token = await AsyncStorage.getItem('token');
        setAuthToken(token);

        setIsReady(true);
      }
    };

    initialize();
  }, [fontsLoaded, error]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {isFirstTimeUser ? (
          <>
            <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding2" options={{ headerShown: false }} />
          </>
        ) : authToken ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="(join)" options={{ headerShown: false }} />
        )}
        {/* Add more screens as needed */}
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
