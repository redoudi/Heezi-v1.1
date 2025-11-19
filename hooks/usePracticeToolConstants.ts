import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { PracticeTool } from "@/context/usePracticeTool";
import { useLocalSearchParams } from "expo-router";

const DEFAULT_PRACTICE_TOOL: PracticeTool = "spreadsheet";

export default function usePracticeToolConstants() {
  const params = useLocalSearchParams<{ practiceTool?: PracticeTool }>();
  const paramValue = params.practiceTool as PracticeTool | undefined;

  const practiceTool = (
    paramValue &&
    Object.prototype.hasOwnProperty.call(practiceToolsConstants, paramValue)
      ? paramValue
      : DEFAULT_PRACTICE_TOOL
  ) satisfies PracticeTool;

  const toolConstants =
    practiceToolsConstants[practiceTool] ??
    practiceToolsConstants[DEFAULT_PRACTICE_TOOL];

  return { practiceTool, toolConstants };
}
