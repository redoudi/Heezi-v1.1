import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useRibbon() {
  const {
    spreadsheetData: { cellsSelected, cellsStyles },
    setCellStyle,
  } = useSpreadsheetStore();
  return {
    boldSelectedCell: () => {
      if (cellsSelected?.length > 0) {
        setCellStyle(cellsSelected?.[0], { fontWeight: "bold" });
      }
    },
    isSelectedCellBold: () => {
      if (cellsSelected?.length > 0) {
        return cellsStyles?.[cellsSelected?.[0]]?.fontWeight === "bold";
      }
      return false;
    },
  };
}
