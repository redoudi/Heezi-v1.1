import { create } from "zustand";

const useTextEditorStore = create((set, get) => ({
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
  setSelectedBlockStyle: (style: { [key: string]: any }) => {
    get().setBlockStyle(selectedBlockIndex, style);
  },
}));
export default useTextEditorStore;
