import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Redirect, router } from 'expo-router';
import { images } from '../constants'
import CustomButton from '../components/Button/CustomButton';

const Onboarding = () => {
  return (
    <SafeAreaView className="bg-customblack">
      <ScrollView contentContainerStyle={{height: verticalScale(700)}}>
        <View className="w-full justify-center items-center" style={{height: verticalScale(650)}}>
          <Image source={images.LogoSide} resizeMode='contain' style={{height: verticalScale(80)}}/>
          <Image source={images.Download} resizeMode='contain' style={{height: verticalScale(230)}}/>
          <View className="relative mt-5">
             <Text className="text-customwhite text-3xl font-pbold text-center">Streamline Your Finances</Text>
             <Text className="text-customwhite text-xl capitalize text-center font-pmedium">Hassle-Free Currency Exchange, Flight Booking, and Bill Payments</Text>
             <CustomButton
              title="Continue"
              handlePress={() => router.push('/Onboarding2')}
              containerStyles="mt-7"
             />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Onboarding