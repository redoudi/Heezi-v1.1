import useTextEditorStore from "@/store/useTextEditorStore";
import { useMemo } from "react";

type TextEditorBlock = {
  blockId?: string;
  style?: { [key: string]: any };
  children?: TextEditorBlock[];
};

const findBlockById = (
  blocks: TextEditorBlock[] | undefined,
  blockId: string | null
): TextEditorBlock | undefined => {
  if (!blocks || !blockId) {
    return undefined;
  }

  for (const block of blocks) {
    if (block.blockId === blockId) {
      return block;
    }

    const nestedMatch = findBlockById(block.children, blockId);
    if (nestedMatch) {
      return nestedMatch;
    }
  }

  return undefined;
};

export default function useTextEditorRibbon() {
  const { contentBlocks, selectedBlockId, setBlockStyle } =
    useTextEditorStore();

  const selectedBlock = useMemo(
    () => findBlockById(contentBlocks, selectedBlockId),
    [contentBlocks, selectedBlockId]
  );
  const isSelectedBlockBold =
    (selectedBlockId !== null && selectedBlock?.style?.fontWeight === "bold") ||
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
