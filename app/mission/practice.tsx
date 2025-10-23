import MascotDialog from "@/components/mascot/mascot-dialog";
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
      <MascotDialog />
    </View>
  );
}
