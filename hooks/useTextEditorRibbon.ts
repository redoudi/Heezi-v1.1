import useTextEditorStore from "@/store/useTextEditorStore";

export default function useSpreadsheetRibbon() {
  const { contentBlocks, selectedBlockIndex, setBlockStyle } =
    useTextEditorStore();
  return {
    boldSelectedBlock: () => {
      if (selectedBlockIndex !== null) {
        setBlockStyle(selectedBlockIndex, { fontWeight: "bold" });
      }
    },
    isSelectedBlockBold:
      contentBlocks?.[selectedBlockIndex]?.style?.fontWeight === "bold",
  };
}
