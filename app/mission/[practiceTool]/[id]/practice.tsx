import { ThemedText } from "@/components/themed-text";
import FullWindowContainer from "@/components/FullWindowContainer";
import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/text-editor/textEditorScreen";
import { CursorProvider } from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import useLoadSpreadsheet from "@/hooks/useLoadSpreadsheet";
import useLoadTextEditor from "@/hooks/useLoadTextEditor";
import useRunSpreadsheetPreActions from "@/hooks/useRunSpreadsheetPreActions";
import useRunTextEditorPreActions from "@/hooks/useRunTextEditorPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import useTextEditorStore from "@/store/useTextEditorStore";
import checkSpreasheetCondition from "@/utils/checkSpreasheetCondition";
import checkTextEditorCondition from "@/utils/checkTextEditorCondition";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { useLocalSearchParams } from "expo-router";
import QuizScreen from "./quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

function LoadedSpreadsheetScreen() {
  useLoadSpreadsheet();
  const { spreadsheetData } = useSpreadsheetStore();
  const runPreActions = useRunSpreadsheetPreActions();

  const checkCondition = (expected: any) => {
    return checkSpreasheetCondition(expected, spreadsheetData);
  };

  return (
    <FullWindowContainer>
      <SpreadsheetScreen />
      <MascotMonitor
        runPreActions={runPreActions}
        practiceToolData={spreadsheetData}
        checkConditionCallback={checkCondition}
      />
    </FullWindowContainer>
  );
}

function LoadedTextEditorScreen() {
  useLoadTextEditor();
  const { contentBlocks, getBlockById, selectedBlockId } = useTextEditorStore();
  const runPreActions = useRunTextEditorPreActions();

  const checkCondition = (expected: any) => {
    return checkTextEditorCondition(
      expected,
      getBlockById as (blockId: string | null) => any,
      selectedBlockId
    );
  };

  return (
    <FullWindowContainer>
      <TextEditorScreen />
      <MascotMonitor
        runPreActions={runPreActions}
        practiceToolData={contentBlocks}
        checkConditionCallback={checkCondition}
      />
    </FullWindowContainer>
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
