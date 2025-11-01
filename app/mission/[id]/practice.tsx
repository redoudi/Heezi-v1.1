import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/text-editor/textEditorScreen";
import usePracticeTool from "@/context/usePracticeTool";
import useLevelData from "@/hooks/use-level-data";
import useCheckSpreadsheetCondition from "@/hooks/useCheckSpreadsheetCondition";
import useCheckTextEditorCondition from "@/hooks/useCheckTextEditorCondition";
import useLoadSpreadsheet from "@/hooks/useLoadSpreadsheet";
import useLoadTextEditor from "@/hooks/useLoadTextEditor";
import useRunSpreadsheetPreActions from "@/hooks/useRunSpreadsheetPreActions";
import useRunTextEditorPreActions from "@/hooks/useRunTextEditorPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import useTextEditorStore from "@/store/useTextEditorStore";
import { View } from "react-native";
import QuizScreen from "./quiz";

function LoadedSpreadsheetScreen() {
  useLoadSpreadsheet();
  const { spreadsheetData, setCellsSelected } = useSpreadsheetStore();
  return (
    <View>
      <SpreadsheetScreen />
      <MascotMonitor
        checkConditionHook={useCheckSpreadsheetCondition}
        runPreActionsHook={useRunSpreadsheetPreActions}
        practiceToolData={spreadsheetData}
        onNextTask={() => setCellsSelected([])}
      />
    </View>
  );
}

function LoadedTextEditorScreen() {
  useLoadTextEditor();
  const { contentBlocks } = useTextEditorStore();
  return (
    <View>
      <TextEditorScreen />
      <MascotMonitor
        checkConditionHook={useCheckTextEditorCondition}
        runPreActionsHook={useRunTextEditorPreActions}
        practiceToolData={contentBlocks}
        onNextTask={() => {}}
      />
    </View>
  );
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

  return <PracticeToolScreen />;
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
