import { levelFiles } from "@/assets/levels/indexLevels";
import MascotMonitor from "@/components/mascot/mascot-monitor";
import SpreadsheetScreen from "@/components/practice-tools/spreadsheet/SpreadsheetScreen";
import TextEditorScreen from "@/components/practice-tools/textEditor";
import usePracticeTool from "@/context/usePracticeTool";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function PracticeToolScreen() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  const { setLevelData } = useSpreadsheetStore();
  useEffect(() => {
    if (id && practiceTool && setLevelData) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelData(levelData);
    }
  }, [practiceTool, id, setLevelData]);
  return (
    <View>
      {practiceTool === "spreadsheet" ? (
        <SpreadsheetScreen />
      ) : (
        <TextEditorScreen />
      )}
      <MascotMonitor />
    </View>
  );
}
