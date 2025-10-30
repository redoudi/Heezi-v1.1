import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/textEditor";
import usePracticeTool from "@/context/usePracticeTool";
import useLoadLevel from "@/hooks/useLoadLevel";
import useLevelData from "@/hooks/use-level-data";
import { View } from "react-native";
import QuizScreen from "@/app/mission/[id]/quiz";

export default function PracticeToolScreen() {
  const { practiceTool } = usePracticeTool();
  useLoadLevel();
  const { levelData } = useLevelData();
  if (!levelData) {
    return null;
  }

  const { levelType } = levelData;
  if (levelType === "quiz") {
    return <QuizScreen />;
  }
  const PracticeToolScreen = () => {
    switch (practiceTool) {
      case "spreadsheet":
        return <SpreadsheetScreen />;
      case "textEditor":
        return <TextEditorScreen />;
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
