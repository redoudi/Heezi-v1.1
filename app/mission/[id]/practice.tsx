import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/textEditor";
import usePracticeTool from "@/context/usePracticeTool";
import { View } from "react-native";

export default function PracticeToolScreen() {
  const { practiceTool } = usePracticeTool();
  return (
    <View>
      {practiceTool === "spreadsheet" ? (
        <SpreadsheetScreen />
      ) : (
        <TextEditorScreen />
      )}
      <MascotMonitor />
    </View>
  );
}
