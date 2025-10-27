import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useCheckCondition({
  stepExpectedRef,
}: {
  stepExpectedRef: any;
}) {
  const {
    spreadsheetData: { cellsValues, cellsSelected, cellsStyles },
  } = useSpreadsheetStore();
  return () => {
    switch (stepExpectedRef.current.type) {
      case "cellValue":
        const currentValue = cellsValues[stepExpectedRef.current.cell];
        return currentValue == stepExpectedRef.current.value;
      case "cellSelected":
        return cellsSelected.includes(stepExpectedRef.current.cell);
      case "cellStyle":
        return (
          JSON.stringify(cellsStyles?.[stepExpectedRef.current.cell]) ===
          JSON.stringify(stepExpectedRef.current.style)
        );
    }
  };
}
