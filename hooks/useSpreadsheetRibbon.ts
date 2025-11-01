import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useSpreadsheetRibbon() {
  const { spreadsheetData, setCellStyle } = useSpreadsheetStore();
  const cellsSelected = spreadsheetData?.cellsSelected;
  const cellsStyles = spreadsheetData?.cellsStyles;
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
