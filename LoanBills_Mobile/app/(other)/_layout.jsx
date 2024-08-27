import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const OtherLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="notifications" />
        <Stack.Screen name="settings" />
      </Stack>
    </>
  );
};

export default OtherLayout;
