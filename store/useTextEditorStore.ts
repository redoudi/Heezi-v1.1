import { create } from "zustand";

const useTextEditorStore = create((set, get) => ({
  contentBlocks: [],
  setLevelData: (levelData: any) => {
    const { contentBlocks } = levelData;
    set(() => ({
      contentBlocks,
    }));
  },
}));
export default useTextEditorStore;
