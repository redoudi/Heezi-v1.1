import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { rangeToCells } from "@/utils/spreadsheetUtils";
import { useEffect } from "react";

export default function useRunPreActions() {
  const { setCellValue, setCellsSelected, spreadsheetData } =
    useSpreadsheetStore();

  useEffect(() => {
    console.log("selectedCells", spreadsheetData?.cellsSelected);
  }, [spreadsheetData]);
  const runPreAction = (preAction: any) => {
    switch (preAction.type) {
      case "cellValue":
        setCellValue(preAction.cell, preAction.value);
        break;
      case "select":
        setCellsSelected(rangeToCells(preAction.cells));
        break;
    }
  };
  return (preActionsArr) => preActionsArr.map(runPreAction);
}
