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
  setBlockText: (id: string, newValue: any) => void;
  setSelectedBlockId: (id: string) => void;
  setBlockStyle: (id: string, style: { [key: string]: any }) => void;
}

const useTextEditorStore = create<TextEditorStore>((set, get) => ({
  contentBlocks: [],
  selectedBlockId: null,
  setLevelData: (levelData: any) => {
    const { contentBlocks } = levelData;
    set(() => ({
      contentBlocks,
    }));
  },
  setBlockText: (id: string, newValue: any) => {
    set((state) => ({
      contentBlocks: state.contentBlocks.map((block) =>
        block.id === id ? { ...block, text: newValue } : block
      ),
    }));
  },
  setSelectedBlockId: (id: string) => {
    set(() => ({
      selectedBlockId: id,
    }));
  },
  setBlockStyle: (id: string, style: { [key: string]: any }) => {
    set((state) => ({
      contentBlocks: state.contentBlocks.map((block) =>
        block.id === id
          ? { ...block, style: { ...block.style, ...style } }
          : block
      ),
    }));
  },
}));
export default useTextEditorStore;
