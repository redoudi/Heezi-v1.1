import { levelFiles } from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useLevelData(levelType: string) {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  const [levelData, setLevelData] = useState<any>(null);
  useEffect(() => {
    if (id && practiceTool) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelData(levelData);
    }
  }, [id, practiceTool]);
  return levelData;
}
