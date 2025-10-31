import { levelFiles } from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useLevelData() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  const [levelType, setLevelType] = useState<any>(null);
  useEffect(() => {
    if (id && practiceTool) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelType(levelData.levelType);
    }
  }, [id, practiceTool]);
  return levelType;
}
