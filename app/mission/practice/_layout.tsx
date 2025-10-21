import { Stack } from "expo-router";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/use-color-scheme";

export default function PracticeLayout() {
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

    <Stack>
      <Stack.Screen name="spreadsheet" options={{ headerShown: false }} />
      <Stack.Screen name="textEditor" options={{ headerShown: false }} />
    </Stack>
  );
}
