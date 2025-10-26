import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useRunPreActions() {
  const { setCellValue } = useSpreadsheetStore();
  const runPreAction = (preAction: any) => {
    switch (preAction.type) {
      case "cellValue":
        setCellValue(preAction.cell, preAction.value);
        break;
    }
  };
  return (preActionsArr) => preActionsArr.map(runPreAction);
}
