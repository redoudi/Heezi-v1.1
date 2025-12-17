import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, ScrollViewProps, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScrollableScreenProps extends ScrollViewProps {
  children: React.ReactNode;
  useSafeArea?: boolean;
}

const BOTTOM_FADE_HEIGHT = 48;

export function ScrollableScreen({
  children,
  useSafeArea = true,
  style,
  contentContainerStyle,
  ...scrollViewProps
}: ScrollableScreenProps) {
  const scrollView = (
    <ScrollView
      style={[styles.scrollView, style]}
      contentContainerStyle={[
        styles.contentContainer,
        contentContainerStyle,
        styles.contentBottomInset,
      ]}
      showsVerticalScrollIndicator={false}
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  );

  const content = (
    <View style={styles.container}>
      {scrollView}
      <LinearGradient
        pointerEvents="none"
        colors={["transparent", "rgba(0,0,0,0.04)", "rgba(0,0,0,0.12)"]}
        locations={[0, 0.45, 1]}
        style={styles.bottomFade}
      />
    </View>
  );

  if (useSafeArea) {
    return <SafeAreaView style={styles.safeArea}>{content}</SafeAreaView>;
  }

  return content;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  contentBottomInset: {
    paddingBottom: BOTTOM_FADE_HEIGHT,
  },
  bottomFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: BOTTOM_FADE_HEIGHT,
  },
});
