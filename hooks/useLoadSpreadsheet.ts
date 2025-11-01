import { levelFiles } from "@/assets/levels/indexLevels";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function useLoadSpreadsheet() {
  const { practiceTool, id } = useLocalSearchParams();
  const { setLevelData } = useSpreadsheetStore();
  useEffect(() => {
    if (id && practiceTool && setLevelData) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelData(levelData);
    }
  }, [practiceTool, id, setLevelData]);
}
