import { Stack } from "expo-router";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function MissionLayout() {
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

    <Stack>
      <Stack.Screen name="scenario" options={{ headerShown: false }} />
    </Stack>
  );
}
