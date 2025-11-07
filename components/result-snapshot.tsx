import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function ResultSnapshot() {
  const {
    spreadsheetData: { cellsValues },
  } = useSpreadsheetStore();
  useEffect(() => {
    console.log(cellsValues);
  }, [cellsValues]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.headerText}>{"Lörem "}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text3}>{"Lörem ipsum"}</Text>
          </View>
          <View>
            <Text style={styles.headerText}>{"Lörem "}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text}>{"Lörem ipsum"}</Text>
            <Text style={styles.text3}>{"Lörem ipsum"}</Text>
          </View>
        </View>
      </View>
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
    height: "100%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
  },
  headerText: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 25,
  },
  text: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
  text3: {
    color: "#292929",
    fontSize: 16,
  },
});
