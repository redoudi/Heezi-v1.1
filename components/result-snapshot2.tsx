import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
export default function ResultSnapshot2() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>{"Lörem "}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text3}>{"Lörem ipsum"}</Text>
          </View>
          <View>
            <Text style={styles.text}>{"Lörem "}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text2}>{"Lörem ipsum"}</Text>
            <Text style={styles.text3}>{"Lörem ipsum"}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  column: {
    marginHorizontal: 32,
  },
  row: {
    flexDirection: "row",
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 32,
    paddingBottom: 536,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
  },
  text: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 25,
  },
  text2: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
  text3: {
    color: "#292929",
    fontSize: 16,
  },
});
