import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { icons } from '../../constants'
import {useState} from 'react'

const FormField = ({ title, otherStyles, value, placeholder, handleChangeText, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
<View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-300 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black border-2 border-gray-900 rounded-2xl focus:border-customwhite items-center flex-row">
        <TextInput 
        className="flex-1 text-customwhite font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField