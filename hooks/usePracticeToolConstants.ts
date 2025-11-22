import practiceToolsConstants from "@/constants/practiceToolsConstants";
import sectionButtons from "@/constants/sectionButtons";

import { useLocalSearchParams } from "expo-router";

export default function usePracticeToolConstants() {
  const { practiceTool } =
    useLocalSearchParams<{ practiceTool }>() || "spreadsheet";
  const toolConstants =
    practiceToolsConstants[practiceTool as keyof typeof practiceToolsConstants];
  const toolSectionButtons =
    sectionButtons[practiceTool as keyof typeof sectionButtons];
  return { practiceTool, toolConstants, toolSectionButtons };
}
