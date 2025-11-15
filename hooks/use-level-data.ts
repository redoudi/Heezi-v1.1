import { levelFiles } from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import { normalizeRouteParam } from "@/utils/normalizeRouteParam";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";

const EMPTY_LEVEL_DATA = { tasks: [], character: "" };

export default function useLevelData() {
  const { practiceTool: practiceToolParam, id: idParam } =
    useLocalSearchParams();
  const practiceTool = normalizeRouteParam(practiceToolParam);
  const id = normalizeRouteParam(idParam);

  const levelData = useMemo(() => {
    if (!practiceTool || !id) {
      return null;
    }

    const toolLevels = levelFiles[practiceTool as string];
    if (!toolLevels) {
      return null;
    }

    return toolLevels[id as string] ?? null;
  }, [practiceTool, id]);

  return levelData || EMPTY_LEVEL_DATA;
}

export function useLevelDataWithLevelNumber(levelNumber: number) {
  const { practiceTool } = usePracticeTool();

  if (!practiceTool) {
    return null;
  }

  const toolLevels = levelFiles[practiceTool as string];
  if (!toolLevels) {
    return null;
  }

  return toolLevels[levelNumber.toString()] ?? EMPTY_LEVEL_DATA;
}

export function getLevelDataByNumber(
  practiceTool: string,
  levelNumber: number
) {
  const toolLevels = levelFiles[practiceTool as string];
  if (!toolLevels) {
    return null;
  }

  return toolLevels[levelNumber.toString()] ?? EMPTY_LEVEL_DATA;
}
