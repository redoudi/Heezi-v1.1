import { create } from "zustand";

interface SpreadsheetStore {
  spreadsheetData: {
    cellsValues: { [key: string]: string | undefined };
    cellsSelected: string[];
    cellsStyles?: { [key: string]: any };
  };
  selectedCells: string[];
  tasks: any[];
  setLevelData: (levelData: any) => void;
  setCellValue: (cell: string, value: string) => void;
  setCellsSelected: (cells: string[]) => void;
  setCellStyle: (cell: string, style: { [key: string]: any }) => void;
}

const useSpreadsheetStore = create<SpreadsheetStore>((set, get) => ({
  spreadsheetData: { cellsValues: {}, cellsSelected: [] },
  selectedCells: [],
  tasks: [],
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

  setCellStyle: (cell: string, style: { [key: string]: any }) => {
    set((state) => ({
      spreadsheetData: {
        ...state.spreadsheetData,
        cellsStyles: { ...state.spreadsheetData.cellsStyles, [cell]: style },
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
