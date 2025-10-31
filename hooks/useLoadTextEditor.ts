import { levelFiles } from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import useTextEditorStore from "@/store/useTextEditorStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function useLoadSpreadsheet() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  const { setLevelData } = useTextEditorStore();
  useEffect(() => {
    if (id && practiceTool && setLevelData) {
      const levelData = levelFiles[practiceTool][id as string];
      setLevelData(levelData);
    }
  }, [practiceTool, id, setLevelData]);
}
