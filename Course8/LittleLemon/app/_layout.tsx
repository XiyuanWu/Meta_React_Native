import { Stack } from "expo-router";
import "react-native-reanimated";


export const unstable_settings = {
  anchor: "(drawer)",
};

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
