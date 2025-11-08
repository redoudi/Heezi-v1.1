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
  selectedBlockIndex: number | null;
  setLevelData: (levelData: any) => void;
  setBlockText: (index: number, newValue: any) => void;
  setSelectedBlockIndex: (index: number) => void;
  setBlockStyle: (index: number, style: { [key: string]: any }) => void;
  getBlockText: (index: number) => string | undefined;
}

const useTextEditorStore = create<TextEditorStore>((set, get) => ({
  contentBlocks: [],
  selectedBlockIndex: null,
  setLevelData: (levelData: any) => {
    const { contentBlocks } = levelData;
    set(() => ({
      contentBlocks,
    }));
  },
  setBlockText: (index: number, newValue: any) => {
    set((state) => ({
      contentBlocks: state.contentBlocks.map((block, i) =>
        i === index ? { ...block, text: newValue } : block
      ),
    }));
  },
  setSelectedBlockIndex: (index: number) => {
    set(() => ({
      selectedBlockIndex: index,
    }));
  },
  setBlockStyle: (index: number, style: { [key: string]: any }) => {
    set((state) => ({
      contentBlocks: state.contentBlocks.map((block, i) =>
        i === index ? { ...block, style: { ...block.style, ...style } } : block
      ),
    }));
  },
  getBlockText: (index: number) => {
    return get().contentBlocks[index]?.text;
  },
}));
export default useTextEditorStore;
