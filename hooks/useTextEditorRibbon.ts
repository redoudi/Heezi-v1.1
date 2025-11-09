import useTextEditorStore from "@/store/useTextEditorStore";
import { useEffect } from "react";

export default function useTextEditorRibbon() {
  const { contentBlocks, selectedBlockId, setBlockStyle } =
    useTextEditorStore();

  const selectedBlock = contentBlocks?.find(
    (block) => block.blockId === selectedBlockId
  );

  useEffect(() => {
    console.log(selectedBlockId);
  }, [selectedBlockId, contentBlocks]);

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
