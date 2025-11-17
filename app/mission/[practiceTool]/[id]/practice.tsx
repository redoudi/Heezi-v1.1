import FullWindowContainer from "@/components/FullWindowContainer";
import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/text-editor/textEditorScreen";
import { CursorProvider } from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import useCheckSpreadsheetCondition from "@/hooks/useCheckSpreadsheetCondition";
import useCheckTextEditorCondition from "@/hooks/useCheckTextEditorCondition";
import useLoadSpreadsheet from "@/hooks/useLoadSpreadsheet";
import useLoadTextEditor from "@/hooks/useLoadTextEditor";
import useRunSpreadsheetPreActions from "@/hooks/useRunSpreadsheetPreActions";
import useRunTextEditorPreActions from "@/hooks/useRunTextEditorPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import useTextEditorStore from "@/store/useTextEditorStore";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import QuizScreen from "./quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

function LoadedSpreadsheetScreen() {
  useLoadSpreadsheet();
  const { spreadsheetData } = useSpreadsheetStore();
  return (
    <FullWindowContainer>
      <SpreadsheetScreen />
      <MascotMonitor
        checkConditionHook={useCheckSpreadsheetCondition}
        runPreActionsHook={useRunSpreadsheetPreActions}
        practiceToolData={spreadsheetData}
      />
    </FullWindowContainer>
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
  return levelType === "quiz" ? (
    <QuizScreen />
  ) : (
    <CursorProvider>
      <PracticeToolScreen />
    </CursorProvider>
  );
}
