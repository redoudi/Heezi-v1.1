import MascotteQuiz from "@/components/animations/MascotteQuiz";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <ThemedText>Sandbox</ThemedText>
      <MascotteQuiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
