import getLevelData from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function useLoadLevel() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  const { setLevelData } = useSpreadsheetStore();
  useEffect(() => {
    if (id && practiceTool && setLevelData) {
      const levelData = getLevelData(practiceTool, id as string);
      setLevelData(levelData);
    }
  }, [practiceTool, id, setLevelData]);
}
