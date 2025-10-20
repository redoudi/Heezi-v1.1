import { ReactNode, createContext, useContext, useState } from "react";

export type PracticeTool = "spreadsheet" | "textEditor" | "none";

const PracticeToolContext = createContext<{
  practiceTool: PracticeTool;
  setPracticeTool: (practiceTool: PracticeTool) => void;
}>({
  practiceTool: "none",
  setPracticeTool: () => {},
});

export function PracticeToolProvider({ children }: { children: ReactNode }) {
  const [practiceTool, setPracticeTool] = useState<PracticeTool>("spreadsheet");
  return (
    <PracticeToolContext.Provider value={{ practiceTool, setPracticeTool }}>
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
