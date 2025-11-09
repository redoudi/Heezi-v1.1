import { levelFiles } from "@/assets/levels/indexLevels";
import { normalizeRouteParam } from "@/utils/normalizeRouteParam";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";

const EMPTY_LEVEL_DATA = { tasks: [] };

export default function useLevelData() {
  const { practiceTool: practiceToolParam, id: idParam } =
    useLocalSearchParams();
  const practiceTool = normalizeRouteParam(practiceToolParam);
  const id = normalizeRouteParam(idParam);

  const currentLevelData = useMemo(() => {
    if (!practiceTool || !id) {
      return null;
    }

    const toolLevels = levelFiles[practiceTool as string];
    if (!toolLevels) {
      return null;
    }

    return toolLevels[id as string] ?? null;
  }, [practiceTool, id]);

  const [levelData, setLevelData] = useState<any>(
    currentLevelData ?? EMPTY_LEVEL_DATA
  );

  useEffect(() => {
    if (currentLevelData) {
      setLevelData(currentLevelData);
    } else {
      setLevelData(EMPTY_LEVEL_DATA);
    }
  }, [currentLevelData]);

  return levelData;
}
