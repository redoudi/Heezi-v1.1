import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useRunPreActions() {
  const { setCellValue, setCellsSelected } = useSpreadsheetStore();
  const runPreAction = (preAction: any) => {
    switch (preAction.type) {
      case "cellValue":
        setCellValue(preAction.cell, preAction.value);
        break;
      case "select":
        setCellsSelected(preAction.cells);
        break;
    }
  };
  return (preActionsArr) => preActionsArr.map(runPreAction);
}
