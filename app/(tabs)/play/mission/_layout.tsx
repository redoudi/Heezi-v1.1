import { Stack } from "expo-router";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/use-color-scheme";

export default function MissionLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="practice" options={{ headerShown: false }} />
    </Stack>
  );
}
