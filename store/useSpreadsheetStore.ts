import { create } from "zustand";

interface SpreadsheetStore {
  spreadsheetData: { [key: string]: string };
  selectedCells: string[];
  tasks: any[];
  intro: string;
  setLevelData: (levelData: any) => void;
}

const useSpreadsheetStore = create<SpreadsheetStore>((set, get) => ({
  spreadsheetData: { cellsValues: [], cellsSelected: [] },

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
    set((state) => ({
      spreadsheetData: {
        ...state.spreadsheetData,
        cellsValues: { ...state.spreadsheetData.cellsValues, [cell]: value },
      },
    }));
  },

  setCellsSelected: (cells: string[]) => {
    set((state) => ({
      spreadsheetData: { ...get().spreadsheetData, cellsSelected: cells },
    }));
  },
}));
export default useSpreadsheetStore;
