import { View, Text, Image, Platform, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native'
import {images} from '../../constants';
import FormField from '../../components/Form/FormField';
import CustomButton from '../../components/Button/CustomButton'
import { AuthContext } from '../../context/AuthContext';
import { loginUser } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useContext } from 'react';
import useLogout from '../../utilities/handleLogout';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Sign In');
  const [emailError, setEmailError] = useState('');
  const { setAuthToken } = useContext(AuthContext);

  const handleLogout = useLogout();

  const handleLogin = async () => {
    setButtonText('Verifying....');
    try {
      const data = await loginUser(form.email, form.password, handleLogout);
      setAuthToken(data.token); // Set the token in context
      Alert.alert('Login successful!');
      router.replace('/(tabs)/wallet')
      // Navigate to the next screen or handle successful login here
    } catch (error) {
      setEmailError('Invalid Credentials')
      Alert.alert('Login failed', 'Invalid Credentials');
      setButtonText('Sign In'); // Reset button text on error
    }
  }
  return (
      <SafeAreaView className="bg-customblack h-full">
        <ScrollView>
         <View className="w-full justify-center px-4 my-[2px]" style={styles.container}>
            <Image source={images.LogoSide} className="w-[160px] h-[80px]"/>
            <Text className="text-customwhite font-psemibold font-semibold text-2xl mt-2">Login to Loanbills</Text>
            <FormField 
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({...form, email:e})}
              otherStyles="mt-4"
              keyboardType="email-address"
            />
               {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
            <FormField 
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({...form, password:e})}
              otherStyles="mt-4"
            />
               {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
            <View className="justify-end items-end mt-2"><Link href='/forgot-password' className="text-lg font-psemibold text-customwhite">Forgot Password?</Link></View>
            <CustomButton 
              title={buttonText}
              handlePress={handleLogin}
              containerStyles="mt-7"
              isLoading={isSubmitting}
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

export default SignIn