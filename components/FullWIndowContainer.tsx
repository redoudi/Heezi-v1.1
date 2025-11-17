import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FullWindowContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, { height: height || "100%" }]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
