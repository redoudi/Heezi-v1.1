import useTextEditorStore from "@/store/useTextEditorStore";

export default function useSpreadsheetRibbon() {
  const { contentBlocks, selectedBlockId, setBlockStyle } =
    useTextEditorStore();

  const isSelectedBlockBold =
    (selectedBlockId !== null &&
      contentBlocks?.find((block) => block.blockId === selectedBlockId)?.style
        ?.fontWeight === "bold") ||
    false;

  const boldSelectedBlock = () => {
    if (selectedBlockId !== null) {
      setBlockStyle(
        selectedBlockId,
        isSelectedBlockBold ? { fontWeight: "normal" } : { fontWeight: "bold" }
      );
    }
  };

  return {
    isSelectedBlockBold,
    boldSelectedBlock,
  };
}
