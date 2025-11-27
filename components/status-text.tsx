import { ThemedText } from "@/components/themed-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { typography } from "@/styles/typography";
import { StyleSheet, View } from "react-native";

export default function StatusText() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[
        styles.statusButton,
        { backgroundColor: toolConstants.secondaryColor },
      ]}
    >
      <ThemedText style={[typography.body, styles.statusText]}>
        En cours
      </ThemedText>
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
  },
});
