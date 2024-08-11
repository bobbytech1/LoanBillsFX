import { Text, View, Image, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants"
import CustomButton from '../components/Button/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-customblack h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[100vh] ">
          <Image source={images.Logo} resizeMode='contain' className="h-[30%]"/>
          <View className="relative mt-5">
             <Text className="text-customwhite text-3xl font-pbold text-center">Welcome</Text>
             <Text className="text-customwhite text-xl capitalize text-center font-pmedium">we are glad that you are here </Text>
             <CustomButton
              title="Get Started"
              handlePress={() => router.push('/Onboarding')}
              containerStyles="mt-7"
             />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

