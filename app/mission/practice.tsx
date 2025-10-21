import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/textEditor";
import usePracticeTool from "@/context/usePracticeTool";

export default function PracticeToolScreen() {
  const { practiceTool } = usePracticeTool();
  return practiceTool === "spreadsheet" ? (
    <SpreadsheetScreen />
  ) : (
    <TextEditorScreen />
  );
}
