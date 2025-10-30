import MascotMonitor from "@/components/mascot/mascot-monitor";
import QuizScreen from "@/components/practice-tools/quiz/quiz";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/textEditor";
import usePracticeTool from "@/context/usePracticeTool";
import useLoadLevelData from "@/hooks/useLoadLevelData";
import { View } from "react-native";

export default function PracticeToolScreen() {
  const { practiceTool } = usePracticeTool();
  const { levelType } = useLoadLevelData();

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
