import { create } from "zustand";

interface SpreadsheetStore {
  spreadsheetData: { [key: string]: string };
  selectedCells: string[];
  tasks: any[];
  intro: string;
  setLevelData: (levelData: any) => void;
}

const useSpreadsheetStore = create<SpreadsheetStore>((set, get) => ({
  spreadsheetData: { cellValues: [], cellsSelected: [] },

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
        cellValues: { ...state.spreadsheetData.cellValues, [cell]: value },
      },
    }));
  },

  setCellsSelected: (cells: string[]) => {
    set((state) => ({
      spreadsheetData: { ...state.spreadsheetData, cellsSelected: cells },
    }));
  },
}));
export default useSpreadsheetStore;
