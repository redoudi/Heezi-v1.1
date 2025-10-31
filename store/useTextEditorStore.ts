import { create } from "zustand";

const useTextEditorStore = create((set, get) => ({
  textBlocks: [],
}));
export default useTextEditorStore;
