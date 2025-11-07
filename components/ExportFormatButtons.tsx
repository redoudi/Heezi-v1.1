import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ExportXlsxButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRow}
      onPress={() => alert("Pressed!")}
    >
      <Image
        source={require("@/assets/images/ceguc7fq_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image}
      />
      <Text style={styles.text}>{".xls"}</Text>
    </TouchableOpacity>
  );
};

const ExportPdfButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRow2}
      onPress={() => alert("Pressed!")}
    >
      <Image
        source={require("@/assets/images/0a6n5ovw_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image}
      />
      <Text style={styles.text}>{".pdf"}</Text>
    </TouchableOpacity>
  );
};

const ExportDocxButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRow3}
      onPress={() => alert("Pressed!")}
    >
      <Image
        source={require("@/assets/images/xhzm8bjz_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image}
      />
      <Text style={styles.text}>{".docx"}</Text>
    </TouchableOpacity>
  );
};

export default function ExportFormatButtons() {
  const { practiceTool } = useLocalSearchParams();
  return (
    <View style={styles.row}>
      <ExportPdfButton />
      {practiceTool === "spreadsheet" && <ExportXlsxButton />}
      {practiceTool === "textEditor" && <ExportDocxButton />}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  buttonRow2: {
    width: 119,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonRow3: {
    width: 132,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonRow4: {
    width: 119,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 56,
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 36,
    marginRight: 10,
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 16,
  },
  text: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
});
