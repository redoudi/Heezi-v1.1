import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useCheckCondition({
  stepExpectedRef,
}: {
  stepExpectedRef: any;
}) {
  const {
    spreadsheetData: { cellValues, cellsSelected },
  } = useSpreadsheetStore();
  return () => {
    switch (stepExpectedRef.current.type) {
      case "cellValue":
        const currentValue = cellValues[stepExpectedRef.current.cell];
        return currentValue == stepExpectedRef.current.value;
      case "cellSelected":
        return cellsSelected.includes(stepExpectedRef.current.cell);
      case "cellProps":
        return false;
    }
  };
}
