import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-customwhite rounded-xl justify-center min-h-[50px] items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      onPress={handlePress}
      disabled={isLoading}
      activeOpacity={0.7}
    >
      <Text className={`font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
