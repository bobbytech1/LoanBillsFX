import { View, Text, Image, Platform, StyleSheet, Alert, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import {images} from '../../constants';
import FormField from '../../components/Form/FormField';
import CustomButton from '../../components/Button/CustomButton'
import useForgotPassword from '../../utilities/useForgotPassword';
import { useState } from 'react';

const ForgotPassword = () => {
  const {
    email,
    emailError,
    buttonText,
    handleEmailChange,
    handleSubmit
  } = useForgotPassword();

    return (
        <SafeAreaView className="bg-customblack h-full">
        <ScrollView>
         <View className="w-full justify-center px-4 my-[2px]" style={styles.container}>
            <Image source={images.LogoSide} className="w-[160px] h-[80px]"/>
            <Text className="text-customwhite font-psemibold font-semibold text-2xl mt-2">Forgot Password</Text>
            <Text className="text-customwhite font-psemibold font-semibold text-lg mt-2">Enter your email address to reset your password.</Text>
            <FormField 
              title="Email"
              value={email}
              handleChangeText={handleEmailChange}
              otherStyles="mt-4"
              keyboardType="email-address"
            />
             {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
            <View className="justify-end items-end mt-2"><Link href="/sign-in" className="text-lg font-psemibold text-customwhite">Remember Password?</Link></View>
            <CustomButton 
              title={buttonText}
              handlePress={handleSubmit}
              containerStyles="mt-7"
            />
            
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-gray-100 text-lg font-pregular">Don't have account?</Text>
              <Link href="/sign-up" className='text-lg font-psemibold text-customwhite'>Sign Up</Link>
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

export default ForgotPassword;