import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type PersistFn = typeof import("zustand/middleware").persist;
type CreateJSONStorageFn =
  typeof import("zustand/middleware").createJSONStorage;

const { persist, createJSONStorage } = require("zustand/middleware") as {
  persist: PersistFn;
  createJSONStorage: CreateJSONStorageFn;
};

type PracticeTool = "spreadsheet" | "textEditor";

interface CompletedLevelsState {
  levelsCompleted: Record<PracticeTool, Record<string, boolean>>;
  setLevelCompleted: (level: string, practiceTool: PracticeTool) => void;
}

const useCompletedLevelsStore = create<CompletedLevelsState>()(
  persist(
    (set) => ({
      levelsCompleted: {
        spreadsheet: { 1: false, 2: false, 3: false },
        textEditor: { 1: false, 2: false, 3: false },
      },
      setLevelCompleted: (level, practiceTool) => {
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
    }),
    {
      name: "completed-levels",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export default useCompletedLevelsStore;
