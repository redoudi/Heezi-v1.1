import SpreadsheetScreen from "@/components/practice-tool/spreadsheet";
import TextEditorScreen from "@/components/practice-tool/textEditor";
import usePracticeTool from "@/context/usePracticeTool";

export default function PracticeToolScreen() {
  const { practiceTool } = usePracticeTool();
  return practiceTool === "spreadsheet" ? (
    <SpreadsheetScreen />
  ) : (
    <TextEditorScreen />
  );
}
