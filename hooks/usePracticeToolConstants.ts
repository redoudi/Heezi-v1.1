import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { PracticeTool } from "@/context/usePracticeTool";
import { useLocalSearchParams } from "expo-router";

export default function usePracticeToolConstants() {
  const { practiceTool } =
    useLocalSearchParams<{ practiceTool: PracticeTool }>() || "spreadsheet";
  const toolConstants =
    practiceToolsConstants[practiceTool as keyof typeof practiceToolsConstants];
  return { practiceTool, toolConstants };
}
