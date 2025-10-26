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
        console.log("selectedCells", cellsSelected);
        console.log(
          "stepExpectedRef.current.cell",
          stepExpectedRef.current.cell
        );
        return cellsSelected.includes(stepExpectedRef.current.cell);
    }
  };
}
