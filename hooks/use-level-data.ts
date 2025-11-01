import { levelFiles } from "@/assets/levels/indexLevels";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useLevelData() {
  const { practiceTool, id } = useLocalSearchParams();

  const [levelData, setLevelData] = useState<any>({ tasks: [] });
  useEffect(() => {
    if (id && practiceTool) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelData(levelData);
    }
  }, [id, practiceTool]);
  return levelData;
}
