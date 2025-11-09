import useTextEditorStore from "@/store/useTextEditorStore";

export default function useSpreadsheetRibbon() {
  const { contentBlocks, selectedBlockId, setBlockStyle } =
    useTextEditorStore();

  const isSelectedBlockBold =
    (selectedBlockId !== null &&
      contentBlocks?.find((block) => block.id === selectedBlockId)?.style
        ?.fontWeight === "bold") ||
    false;

  const boldSelectedBlock = () => {
    if (selectedBlockId !== null) {
      const isCurrentlyBold =
        contentBlocks?.find((block) => block.id === selectedBlockId)?.style
          ?.fontWeight === "bold";
      setBlockStyle(
        selectedBlockId,
        isCurrentlyBold ? { fontWeight: "normal" } : { fontWeight: "bold" }
      );
    }
  };

  return {
    isSelectedBlockBold,
    boldSelectedBlock,
  };
}
