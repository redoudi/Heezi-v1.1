import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useRibbon() {
  const {
    spreadsheetData: { cellsValues, cellsSelected, cellsStyles },
    setCellsSelected,
    setCellValue,
    setCellStyle,
  } = useSpreadsheetStore();
  return {
    boldSelectedCell: () => {
      if (cellsSelected.length > 0) {
        setCellStyle(cellsSelected[0], { fontWeight: "bold" });
      }
    },
  };
}
