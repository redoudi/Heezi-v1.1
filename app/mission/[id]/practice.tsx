import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/textEditor";
import usePracticeTool from "@/context/usePracticeTool";
import useLoadLevelData from "@/hooks/useLoadLevelData";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function PracticeToolScreen() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  useLoadLevelData();

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
