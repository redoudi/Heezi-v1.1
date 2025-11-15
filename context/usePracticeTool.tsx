import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { ReactNode, createContext, useContext, useState } from "react";

export type PracticeTool = "spreadsheet" | "textEditor" | "";

const defaultPracticeTool: PracticeTool = "spreadsheet";

const PracticeToolContext = createContext<{
  practiceTool: PracticeTool;
  setPracticeTool: (practiceTool: PracticeTool) => void;
  toolConstants: typeof practiceToolsConstants;
}>({
  practiceTool: "",
  setPracticeTool: (arg1: PracticeTool) => {},
  toolConstants:
    practiceToolsConstants[
      defaultPracticeTool as keyof typeof practiceToolsConstants
    ],
});

export function PracticeToolProvider({ children }: { children: ReactNode }) {
  const [practiceTool, setPracticeTool] =
    useState<PracticeTool>(defaultPracticeTool);
  const toolConstants =
    practiceToolsConstants[practiceTool as keyof typeof practiceToolsConstants];

  return (
    <PracticeToolContext.Provider
      value={{
        practiceTool,
        setPracticeTool,
        toolConstants,
      }}
    >
      {children}
    </PracticeToolContext.Provider>
  );
}

export default function usePracticeTool() {
  const context = useContext(PracticeToolContext);
  if (context === undefined) {
    throw new Error(
      "usePracticeTool must be used within a PracticeToolProvider"
    );
  }
  return context;
}
