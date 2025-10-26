import useSpreadsheetStore from "@/store/useSpreadsheetStore";

export default function useCheckCondition({
  stepExpectedRef,
}: {
  stepExpectedRef: any;
}) {
  const { spreadsheetData, selectedCells } = useSpreadsheetStore();
  return () => {
    switch (stepExpectedRef.current.type) {
      case "cellValue":
        const currentValue = spreadsheetData[stepExpectedRef.current.cell];
        return currentValue == stepExpectedRef.current.value;
      case "cellSelected":
        return selectedCells.includes(stepExpectedRef.current.cell);
    }
  };
}
