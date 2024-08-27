import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from "expo-router"
import { StatusBar } from 'expo-status-bar'

import { icons } from "../../constants";

const TabIcon = ({ icon, color, focused, name}) => {
  return(
    <View className="items-center justify-center text-gray-400 gap-[2px]">
    <Image 
    source={icon}
    resizeMode="contain"
    tintColor={color}
    className="w-6 h-6"
    />
    <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[12px]`} style={{color: color}}>
      {name}
    </Text>
  </View>
  )
  
}

const TabsLayout = () => {
  return (
   <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          height: '10%',
          borderTopWidth: 1,
          borderTopColor: '#9ca3af'
        }
      }}
    >
      <Tabs.Screen 
      name="wallet"
      options={{
        title: 'Wallet',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon 
            icon={icons.wallet}
            color={color}
            focused={focused}
            name="Wallet"
          />
        )
      }} 
      />
      <Tabs.Screen 
      name="exchange"
      options={{
        title: 'Exchange',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon 
            icon={icons.exchange}
            color={color}
            focused={focused}
            name="Exchange"
          />
        )
      }} 
      />
      <Tabs.Screen 
      name="flight"
      options={{
        title: 'Flight',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon 
            icon={icons.flight}
            color={color}
            focused={focused}
            name="Flight"
          />
        )
      }} 
      />
      <Tabs.Screen 
      name="services"
      options={{
        title: 'Services',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon 
            icon={icons.services}
            color={color}
            focused={focused}
            name="Services"
          />
        )
      }} 
      />
    </Tabs>
    <StatusBar backgroundColor="#161622"  style='light'/>
   </>
  )
}

export default TabsLayout