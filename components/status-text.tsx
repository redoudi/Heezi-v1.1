import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { StyleSheet, Text, View } from "react-native";

export default function StatusText() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[
        styles.statusButton,
        { backgroundColor: toolConstants.secondaryColor },
      ]}
    >
      <Text style={styles.statusText}>En cours</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  statusButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  statusText: {
    color: "#0A2924",
    lineHeight: 10,
    fontSize: 14,
  },
});
