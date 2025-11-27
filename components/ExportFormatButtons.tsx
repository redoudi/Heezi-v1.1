import useLevelData from "@/hooks/use-level-data";
import useExportSpreadsheetValues from "@/hooks/useExportSpreadsheetValues";
import useExportTextEditorValues from "@/hooks/useExportTextEditorValues";
import { exportTextEditorDocx } from "@/utils/exportDocx";
import { exportSpreadsheetPdf, exportTextEditorPdf } from "@/utils/exportPdf";
import { useLocalSearchParams } from "expo-router";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { exportXlsx } from "../utils/exportXlsx";

const ExportXlsxButton = () => {
  const { contents } = useExportSpreadsheetValues();
  const { title } = useLevelData();
  const handleExportXlsx = () => {
    if (!contents.length) {
      Alert.alert(
        "Nothing to export",
        "We couldn't find any data to include in the spreadsheet."
      );
      return;
    }

    try {
      exportXlsx(title, contents);
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
  const { title } = useLevelData();
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
      if (practiceTool === "spreadsheet") {
        await exportSpreadsheetPdf(
          title,
          contents as ReturnType<typeof useExportSpreadsheetValues>["contents"]
        );
      } else {
        await exportTextEditorPdf(
          title,
          contents as ReturnType<typeof useExportTextEditorValues>["contents"]
        );
      }
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
  const { contents } = useExportTextEditorValues();
  const { title } = useLevelData();
  const handleExportDocx = async () => {
    if (!contents.length) {
      Alert.alert(
        "Nothing to export",
        "We couldn't find any data to include in the document."
      );
      return;
    }

    try {
      await exportTextEditorDocx(title, contents);
    } catch (error) {
      console.error("Failed to export DOCX", error);
      Alert.alert(
        "Export failed",
        "Something went wrong while preparing your document. Please try again."
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.buttonRow3}
      onPress={() => {
        void handleExportDocx();
      }}
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
});
