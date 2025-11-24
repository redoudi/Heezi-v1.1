import { create } from "zustand";

const useCompletedLevelsStore = create((set) => ({
  levelsCompleted: {
    spreadsheet: { 1: false, 2: false, 3: false },
    textEditor: { 1: false, 2: false, 3: false },
  },
  setLevelCompleted: (level: string, levelType: string) => {
    set((state) => ({
      levelsCompleted: {
        ...state.levelsCompleted,
        [levelType]: {
          ...state.levelsCompleted[levelType],
          [level]: true,
        },
      },
    }));
  },
}));
export default useCompletedLevelsStore;
