import useTextEditorStore from "@/store/useTextEditorStore";

export default function useSpreadsheetRibbon() {
  const { contentBlocks, selectedBlockIndex, setBlockStyle } =
    useTextEditorStore();

  const isSelectedBlockBold =
    (selectedBlockIndex !== null &&
      contentBlocks?.[selectedBlockIndex]?.style?.fontWeight === "bold") ||
    false;

  const boldSelectedBlock = () => {
    if (selectedBlockIndex !== null) {
      const isCurrentlyBold =
        contentBlocks[selectedBlockIndex]?.style?.fontWeight === "bold";
      setBlockStyle(
        selectedBlockIndex,
        isCurrentlyBold ? { fontWeight: "normal" } : { fontWeight: "bold" }
      );
    }
  };

  return {
    isSelectedBlockBold,
    boldSelectedBlock,
  };
}
