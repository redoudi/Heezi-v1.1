import useTextEditorStore from "@/store/useTextEditorStore";

export default function useSpreadsheetRibbon() {
  const { contentBlocks, selectedBlockIndex, setBlockStyle } =
    useTextEditorStore();
  return {
    isSelectedBlockBold:
      contentBlocks?.[selectedBlockIndex]?.style?.fontWeight === "bold" ||
      false,
    boldSelectedBlock: () => {
      if (selectedBlockIndex !== null) {
        setBlockStyle(
          selectedBlockIndex,
          this.isSelectedBlockBold
            ? { fontWeight: "normal" }
            : { fontWeight: "bold" }
        );
      }
    },
  };
}
