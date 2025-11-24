import { create } from "zustand";

const useCompletedLevelsStore = create((set) => ({
  levelsCompleted: {
    spreadsheet: { 1: false, 2: false, 3: false },
    textEditor: { 1: false, 2: false, 3: false },
  },
  setLevelCompleted: (level: string, practiceTool: string) => {
    set((state) => ({
      levelsCompleted: {
        ...state.levelsCompleted,
        [practiceTool]: {
          ...state.levelsCompleted[practiceTool],
          [level]: true,
        },
      },
    }));
  },
}));
export default useCompletedLevelsStore;
