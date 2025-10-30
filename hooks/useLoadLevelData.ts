import { levelFiles } from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useLoadLevelData() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  const { setLevelData } = useSpreadsheetStore();
  const [levelData, setLevelDataState] = useState<any>(null);
  useEffect(() => {
    if (id && practiceTool && setLevelData) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelDataState(levelData);
      setLevelData(levelData);
    }
  }, [practiceTool, id, setLevelData]);
  return levelData;
}
