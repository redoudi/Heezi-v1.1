import { create } from "zustand";

interface ContentBlock {
  type: string;
  id?: string;
  text?: string;
  placeholder?: string;
  style?: {
    [key: string]: any;
  };
  blockStyle?: {
    [key: string]: any;
  };
}

interface TextEditorStore {
  contentBlocks: ContentBlock[];
  selectedBlockId: string | null;
  setLevelData: (levelData: any) => void;
  setBlockText: (blockId: string, newValue: any) => void;
  setSelectedBlockId: (blockId: string) => void;
  setBlockStyle: (blockId: string, style: { [key: string]: any }) => void;
}

const useTextEditorStore = create<TextEditorStore>((set, get) => ({
  contentBlocks: [],
  selectedBlockId: null,
  setLevelData: (levelData: any) => {
    const contentBlocks = JSON.parse(
      JSON.stringify(levelData?.contentBlocks ?? [])
    );
    set(() => ({
      contentBlocks,
    }));
  },
  setBlockText: (blockId: string, newValue: any) => {
    set((state) => ({
      contentBlocks: state.contentBlocks.map((block) =>
        block.blockId === blockId ? { ...block, text: newValue } : block
      ),
    }));
  },
  setSelectedBlockId: (blockId: string) => {
    set(() => ({
      selectedBlockId: blockId,
    }));
  },
  setBlockStyle: (blockId: string, style: { [key: string]: any }) => {
    set((state) => ({
      contentBlocks: state.contentBlocks.map((block) =>
        block.blockId === blockId
          ? { ...block, style: { ...block.style, ...style } }
          : block
      ),
    }));
  },
}));
export default useTextEditorStore;
