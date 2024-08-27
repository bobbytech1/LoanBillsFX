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

const ExchangeTab = () => {
  const { hasNewNotifications, handleNotificationClick } = useNotifications();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View className="bg-[#161622] pt-[6px]">
            <View>
              <View>
                <Text className="text-[35px]">👋🏻</Text>
                <View>
                <Text className="text-white font-psemibold">Hello,</Text>
                <Text className="text-white font-psemibold">Divine</Text>
              </View>
              </View>
              <View>
                <View className="relative">
                <TouchableOpacity activeOpacity={0.7} onPress={handleNotificationClick}>
                   <Image source={icons.notification} resizeMode="contain" className="w-8 h-8"/>
                </TouchableOpacity>
                {hasNewNotifications && (
                  <View className="absolute -top-1 -right-1 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
                    <Text className="text-white text-xs">!</Text>
                  </View>
                )}
                </View>
                
                <TouchableOpacity activeOpacity={0.7}>
                   <Image source={icons.settings} resizeMode="contain" className="w-8 h-8"/>
                </TouchableOpacity>
               
              </View>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "ios" ? 150 : 200,
  },
});

export default ExchangeTab;
