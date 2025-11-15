import { ReactNode, createContext, useContext, useState } from "react";

export type PracticeTool = "spreadsheet" | "textEditor" | "";

const PracticeToolContext = createContext<{
  practiceTool: PracticeTool;
  setPracticeTool: (practiceTool: PracticeTool) => void;
  practiceToolColor: string;
}>({
  practiceTool: "",
  setPracticeTool: (arg1: PracticeTool) => {},
  practiceToolColor: "#FFFFFF",
});

export function PracticeToolProvider({ children }: { children: ReactNode }) {
  const [practiceTool, setPracticeTool] = useState<PracticeTool>("textEditor");

  const getPracticeToolColor = () => {
    switch (practiceTool) {
      case "spreadsheet":
        return "#72D6BA";
      case "textEditor":
        return "#33C6FD";
      default:
        return "#FFFFFF";
    }
  };
  const practiceToolColor = getPracticeToolColor();
  return (
    <PracticeToolContext.Provider
      value={{ practiceTool, setPracticeTool, practiceToolColor }}
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
