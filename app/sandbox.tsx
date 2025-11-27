import MascotteQuiz from "@/components/animations/MascotteQuiz";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 10, lineHeight: 24 }}>Sandbox</Text>
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
