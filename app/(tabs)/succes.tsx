import { StyleSheet, Text, View } from "react-native";

export default function SuccesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Succès</Text>
      <Text style={styles.subtitle}>
        Success/Achievements screen content goes here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
});
