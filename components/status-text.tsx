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
      <Text>En cours</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  statusButton: {
    width: 68,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 4,
  },
  statusText: {
    color: "#0A2924",
    fontSize: 16,
  },
});
