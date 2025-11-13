import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { getCellUnderneath } from "@/utils/spreadsheetUtils";
import { useEffect } from "react";

export const useKbdNextStep = ({
  runnerRef,
  levelType,
  nextStep,
}: {
  runnerRef: { step: number };
  levelType: string;
  nextStep: () => void;
}) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (runnerRef.current.step > -2 && event.key === "Enter") {
        nextStep();
      }
    };

    // Add event listener
    if (typeof window !== "undefined" && levelType === "lesson") {
      window.addEventListener("keydown", handleKeyPress);
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined" && levelType === "lesson") {
        window.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [levelType]);
};

export const useKbdSpdshtNextRow = () => {
  const {
    spreadsheetData: { cellsSelected },
    setCellsSelected,
  } = useSpreadsheetStore();
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (cellsSelected.length > 0 && event.key === "Enter") {
        const firstCell = cellsSelected[0];
        const nextCell = getCellUnderneath(firstCell);
        setCellsSelected([nextCell]);
      }
    };

    // Add event listener
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyPress);
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [cellsSelected, setCellsSelected]);
};
