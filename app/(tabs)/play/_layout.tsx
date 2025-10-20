import { PracticeToolProvider } from "@/context/usePracticeTool";
import { Stack } from "expo-router";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function PlayLayout() {
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <PracticeToolProvider>
      <Stack />
    </PracticeToolProvider>
  );
}
