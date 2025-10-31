import { create } from "zustand";

const useTextEditorStore = create((set, get) => ({
  contentBlocks: [],
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
}));
export default useTextEditorStore;
