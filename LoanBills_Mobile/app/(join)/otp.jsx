import { View, Text, ScrollView, Image, Platform, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/Form/FormField'
import { useLocalSearchParams, Link, router } from 'expo-router'
import {useState, useEffect, React } from 'react'
import { images } from '../../constants'
import { verifyOtp, resendOtp } from '../../services/api'
import CustomButton from "../../components/Button/CustomButton";

const OTP = () => {
  const { email } = useLocalSearchParams();
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [countdown, setCountdown] = useState(59);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [buttonText, setButtonText] = useState('Verify');


  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsResendEnabled(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);


  const handleResendOtp = async () => {
    try {
      await resendOtp(email);
      setCountdown(59); // Reset countdown
      setIsResendEnabled(false);
      Alert.alert('OTP has been resent to your email.');
    } catch (error) {
      Alert.alert(error.message || 'Failed to resend OTP.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Verifying....')
    let valid = true;

    if (!otp) {
      setOtpError('Please enter the code sent to your email.');
      valid = false;
    } else if (otp.length !== 6) {
      setOtpError('Please enter a valid 6-digit code.');
      valid = false;
    }

    if (valid) {
      try {
        await verifyOtp(email, otp);
        router.replace('/sign-in')
        // Handle success (e.g., redirect to another page)
      } catch (error) {
        Alert.alert('Invalid or Expired OTP');
      } finally {
        setButtonText('Verify')
      }
    }
  };

  return (
    <SafeAreaView className="bg-customblack h-full">
      <ScrollView>
      <View className="w-full justify-center px-4 my-[2px]" style={styles.container}>
      <Image source={images.LogoSide} className="w-[160px] h-[80px]"/>
      <Text className="text-customwhite font-psemibold font-semibold text-2xl mt-2">Verify your Email</Text>
      <Text className="text-customwhite font-psemibold font-semibold text-lg mt-2">The verification code has been sent to your email.</Text>
      <FormField 
        title='Email'
        otherStyles='mt-4'
        value={email}
        keyboardType='email-address'
        editable={false}
      />
      <FormField 
        title='Enter the 6-digit number sent to you.'
        otherStyles='mt-4'
        value={otp}
        handleChangeText={setOtp}
        keyboardType='numeric'
        
      />
      {otpError && (
            <View className="justify-center items-center"><Text className="text-red-500 text-lg font-pmedium">{otpError}</Text></View>
          )}
      <CustomButton 
              title={buttonText}
              handlePress={handleOtpSubmit}
              containerStyles="mt-7"
              
        />
      <View className="pt-5 flex-row gap-2">
      <Text className="text-gray-100 text-[14px] font-pregular">
        Didn't receive the code?{' '}
      </Text>
      {isResendEnabled ? (
        <TouchableOpacity onPress={handleResendOtp}>
          <Text className="text-[15px] font-psemibold text-customwhite">
            Resend OTP
          </Text>
        </TouchableOpacity>
      ) : (
        <Text className="text-customwhite text-[14px] font-pmedium">
           Resend OTP in {countdown} sec
        </Text>
      )}
    </View>
      </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height: Platform.OS === 'ios' ? 650 : 700,
  }
  
});

export default OTP