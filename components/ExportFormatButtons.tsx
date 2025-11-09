import useExportSpreadsheetValues from "@/hooks/useExportSpreadsheetValues";
import useExportTextEditorValues from "@/hooks/useExportTextEditorValues";
import { exportPdf } from "@/utils/exportPdf";
import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { exportXlsx } from "../utils/exportXlsx";

const ExportXlsxButton = () => {
  const { values } = useExportSpreadsheetValues();

  const handleExportXlsx = () => {
    if (!values.length) {
      Alert.alert(
        "Nothing to export",
        "We couldn't find any data to include in the spreadsheet."
      );
      return;
    }

    if (Platform.OS !== "web") {
      Alert.alert(
        "Export unavailable",
        "Spreadsheet export is currently available on web only."
      );
      return;
    }

    try {
      exportXlsx(values);
    } catch (error) {
      console.error("Failed to export XLSX", error);
      Alert.alert(
        "Export failed",
        "Something went wrong while preparing your spreadsheet. Please try again."
      );
    }
  };

  return (
    <TouchableOpacity style={styles.buttonRow} onPress={handleExportXlsx}>
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
  const { practiceTool } = useLocalSearchParams();
  const getValuesHook =
    practiceTool === "spreadsheet"
      ? useExportSpreadsheetValues
      : useExportTextEditorValues;
  const { contents } = getValuesHook();

  const handleExportPdf = async () => {
    if (!contents.length) {
      Alert.alert(
        "Nothing to export",
        "We couldn't find any data to include in the PDF."
      );
      return;
    }

    try {
      await exportPdf(contents);
    } catch (error) {
      console.error("Failed to export PDF", error);
      Alert.alert(
        "Export failed",
        "Something went wrong while preparing your PDF. Please try again."
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.buttonRow2}
      onPress={() => {
        void handleExportPdf();
      }}
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
