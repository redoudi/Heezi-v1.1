import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FullWIndowContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, { height: height }]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
