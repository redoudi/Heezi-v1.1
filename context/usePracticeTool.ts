import React, { ReactNode, createContext, useContext, useState } from "react";

export type PracticeTool = "spreadsheet" | "textEditor";

const PracticeToolContext = createContext<
  | {
      practiceTool: PracticeTool;
      setPracticeTool: (practiceTool: PracticeTool) => void;
    }
  | undefined
>(undefined);

export function PracticeToolProvider({ children }: { children: ReactNode }) {
  const [practiceTool, setPracticeTool] = useState<PracticeTool>("spreadsheet");
  return React.createElement(
    PracticeToolContext.Provider,
    { value: { practiceTool, setPracticeTool } },
    children
  );
}

export default function usePracticeTool(): PracticeTool {
  const context = useContext(PracticeToolContext);
  if (context === undefined) {
    throw new Error(
      "usePracticeTool must be used within a PracticeToolProvider"
    );
  }
  return context;
}
