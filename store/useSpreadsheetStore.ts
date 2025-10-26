import { create } from "zustand";

interface SpreadsheetStore {
  spreadsheetData: { [key: string]: string };
  selectedCells: string[];
  tasks: any[];
  intro: string;
  setLevelData: (levelData: any) => void;
}

const useSpreadsheetStore = create<SpreadsheetStore>((set, get) => ({
  spreadsheetData: {},
  selectedCells: [],
  tasks: [],
  intro: "",
  setLevelData: (levelData: any) => {
    const { spreadsheetData, tasks, intro } = levelData;
    set(() => ({
      spreadsheetData,
      tasks,
      intro,
    }));
  },

  setCellValue: (cell: string, value: string) => {
    set((state: { spreadsheetData: { [key: string]: string } }) => ({
      spreadsheetData: { ...state.spreadsheetData, [cell]: value },
    }));
  },

  setSelectedCells: (selectedCells: string[]) => {
    set(() => ({
      selectedCells,
    }));
  },
}));
export default useSpreadsheetStore;
