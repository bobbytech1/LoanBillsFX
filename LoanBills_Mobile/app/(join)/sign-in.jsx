import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ScrollView } from 'react-native'
import {images} from '../../constants';
import FormField from '../../components/Form/FormField';
import CustomButton from '../../components/Button/CustomButton'
import { useState } from 'react';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = () => {

  }
  return (
      <SafeAreaView className="bg-customblack h-full">
        <ScrollView>
         <View className="w-full min-h-[100vh] justify-center px-4 my-[2px]">
            <Image source={images.LogoSide} className="w-[150px] h-[80px]"/>
            <Text className="text-customwhite font-psemibold font-semibold text-2xl mt-2">Login to Loanbills</Text>
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
            
            <CustomButton 
              title="Sign In"
              handlePress={handleSubmit}
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

export default SignIn