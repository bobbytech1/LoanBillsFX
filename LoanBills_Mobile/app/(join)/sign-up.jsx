import { View, Text, Platform, StyleSheet, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ScrollView } from 'react-native'
import {images} from '../../constants';
import FormField from '../../components/Form/FormField';
import CustomButton from '../../components/Button/CustomButton'
import { useState } from 'react';
import { registerUser } from '../../services/api';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Sign Up')
  const validateForm = () => {
    if (!form.name || !form.email || !form.password || !form.country) {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    return true;
  }
  const handleSubmit = async (e) => {
    setButtonText('Submitting...')
    e.preventDefault();

    if (validateForm()) {
      try {
        const result = await registerUser(form)
        router.replace(`/otp?email=${encodeURIComponent(form.email)}`)
      } catch (error) {
        Alert.alert('Error', error.messge)
      } finally {
        setButtonText('Sign Up')
      }
    }

    if (form.email === form.email){
      router.replace(`/otp?email=${encodeURIComponent(form.email)}`)
    }

  }
  return (
      <SafeAreaView className="bg-customblack h-full">
        <ScrollView>
         <View className="w-full flex-1 px-4 my-[2px]" style={styles.container}>
            <Image source={images.LogoSide} className="w-[160px] h-[80px]"/>
            <Text className="text-customwhite font-psemibold font-semibold text-2xl mt-2">Sign up to Loanbills</Text>
            <FormField 
              title="Name"
              value={form.name}
              handleChangeText={(e) => setForm({...form, name:e})}
              otherStyles="mt-4"
              keyboardType="name"
            />
            <FormField 
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({...form, email:e})}
              otherStyles="mt-4"
              keyboardType="email-address"
            />
            <FormField 
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({...form, password:e})}
              otherStyles="mt-4"
            />
            <FormField 
              title="Country"
              value={form.country}
              handleChangeText={(e) => setForm({...form, country:e})}
              otherStyles="mt-4"
            />
            <CustomButton 
              title={buttonText}
              handlePress={handleSubmit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-gray-100 text-lg font-pregular">Have account?</Text>
              <Link href="/sign-in" className='text-lg font-psemibold text-customwhite'>Sign In</Link>
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
export default SignUp