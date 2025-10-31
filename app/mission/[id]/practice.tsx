import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/text-editor/textEditorScreen";
import usePracticeTool from "@/context/usePracticeTool";
import useLevelData from "@/hooks/use-level-data";
import useLoadSpreadsheet from "@/hooks/useLoadSpreadsheet";
import useLoadTextEditor from "@/hooks/useLoadTextEditor";
import { View } from "react-native";
import QuizScreen from "./quiz";

function LoadedSpreadsheetScreen() {
  useLoadSpreadsheet();
  return <SpreadsheetScreen />;
}

function LoadedTextEditorScreen() {
  useLoadTextEditor();
  return <TextEditorScreen />;
}

function PracticeToolScreen() {
  const { practiceTool } = usePracticeTool();

  const PracticeToolScreen = () => {
    switch (practiceTool) {
      case "spreadsheet":
        return <LoadedSpreadsheetScreen />;
      case "textEditor":
        return <LoadedTextEditorScreen />;
      default:
        return null;
    }
  };

  return (
    <View>
      <PracticeToolScreen />
      <MascotMonitor />
    </View>
  );
}

export default function PracticeScreen() {
  const { levelType } = useLevelData();
  switch (levelType) {
    case "quiz":
      return <QuizScreen />;
    case "practice":
      return <PracticeToolScreen />;
    case "lesson":
      return <PracticeToolScreen />;
    default:
      return null;
  }
}
