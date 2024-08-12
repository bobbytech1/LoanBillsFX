import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Redirect, router } from 'expo-router';
import { images } from '../constants'
import CustomButton from '../components/Button/CustomButton';

const Onboarding2 = () => {
  return (
    <SafeAreaView className="bg-customblack">
      <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full justify-center items-center" style={{height: verticalScale(650)}}>
                <Image source={images.LogoSide} resizeMode='contain' style={{height: verticalScale(80)}} />
                <Image source={images.SlideOn}  resizeMode='contain' style={{height: verticalScale(300)}}  />
                <View className="relative mt-5">
             <Text className="text-customwhite text-3xl font-pbold text-center">Simplify Finances</Text>
             <Text className="text-customwhite text-[15px] capitalize text-center font-pmedium">Simplify Finances: Easy Exchange, Seamless Booking, Quick Payments</Text>
             <CustomButton
              title="Create Account"
              handlePress={() => router.push('/sign-u')}
              containerStyles="mt-7"
             />
          </View>
            </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Onboarding2