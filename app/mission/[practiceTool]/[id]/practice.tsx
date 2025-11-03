import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/text-editor/textEditorScreen";
import useLevelData from "@/hooks/use-level-data";
import useCheckSpreadsheetCondition from "@/hooks/useCheckSpreadsheetCondition";
import useCheckTextEditorCondition from "@/hooks/useCheckTextEditorCondition";
import useLoadSpreadsheet from "@/hooks/useLoadSpreadsheet";
import useLoadTextEditor from "@/hooks/useLoadTextEditor";
import useRunSpreadsheetPreActions from "@/hooks/useRunSpreadsheetPreActions";
import useRunTextEditorPreActions from "@/hooks/useRunTextEditorPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import useTextEditorStore from "@/store/useTextEditorStore";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
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
  const { practiceTool } = useLocalSearchParams();

  switch (practiceTool) {
    case "spreadsheet":
      return <LoadedSpreadsheetScreen />;
    case "textEditor":
      return <LoadedTextEditorScreen />;
    default:
      throw new Error("Practice Tool not found");
  }
}

export default function PracticeScreen() {
  const { levelType } = useLevelData();
  return (
    <View style={styles.container}>
      {levelType === "quiz" ? <QuizScreen /> : <PracticeToolScreen />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
