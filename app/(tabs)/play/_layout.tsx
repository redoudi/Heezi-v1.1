import { PracticeToolProvider } from "@/context/usePracticeTool";
import { Stack } from "expo-router";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/use-color-scheme";

export default function PlayLayout() {
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <PracticeToolProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="mission" options={{ headerShown: false }} />
      </Stack>
    </PracticeToolProvider>
  );
}
