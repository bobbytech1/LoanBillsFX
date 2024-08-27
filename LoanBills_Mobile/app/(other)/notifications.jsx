import {
    View,
    Text,
    ScrollView,
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { Redirect, router } from "expo-router";
  import { icons } from "../../constants";
  import useNotifications from "../../utilities/useNotifications";

const notifications = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
            <View className='bg-gray-100 p-4 rounded-lg mb-4'>
                <Text className='text-gray-800'>You have a new message.</Text>
                <Text className='text-gray-500 text-xs mt-1'>10 mins ago</Text>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      height: Platform.OS === "ios" ? 150 : 200,
    },
  });

export default notifications