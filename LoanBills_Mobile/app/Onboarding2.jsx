import { View, Text, ScrollView, Platform, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../constants';
import CustomButton from '../components/Button/CustomButton';

const Onboarding2 = () => {
  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      router.replace('/sign-up'); // Navigate to the sign-up screen after onboarding
    } catch (error) {
      console.error('Error saving onboarding state:', error);
    }
  };

  return (
    <SafeAreaView className="bg-customblack h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center" style={styles.container}>
          <Image source={images.LogoSide} resizeMode="contain" style={{ height: verticalScale(80) }} />
          <Image source={images.SlideOn} resizeMode="contain" style={{ height: verticalScale(300) }} />
          <View className="relative mt-5">
            <Text className="text-customwhite text-3xl font-pbold text-center">Simplify Finances</Text>
            <Text className="text-customwhite text-[15px] capitalize text-center font-pmedium">
              Simplify Finances: Easy Exchange, Seamless Booking, Quick Payments
            </Text>
            <CustomButton
              title="Create Account"
              handlePress={completeOnboarding}
              containerStyles="mt-7"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 650 : 700,
  },
});

export default Onboarding2;
