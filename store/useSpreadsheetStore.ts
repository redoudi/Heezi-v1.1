import { parseCellsExpressions } from "@/utils/spreadsheetUtils";
import { create } from "zustand";

interface SpreadsheetStore {
  spreadsheetData: {
    cellsValues: { [key: string]: string | undefined };
    cellsSelected: string[];
    cellsStyles?: { [key: string]: any };
  };

  tasks: any[];
  setLevelData: (levelData: any) => void;
  setCellValue: (cell: string, value: string) => void;
  setCellsSelected: (cells: string[]) => void;
  setCellStyle: (cell: string, style: { [key: string]: any }) => void;
  levelType: string;
}

const useSpreadsheetStore = create<SpreadsheetStore>((set, get) => ({
  spreadsheetData: { cellsValues: {}, cellsSelected: [] },

  tasks: [],
  levelType: "",
  setLevelData: (levelData: any) => {
    const { spreadsheetData, tasks, levelType } = levelData;
    set(() => ({
      spreadsheetData,
      tasks,
      levelType,
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
      spreadsheetData: {
        ...get().spreadsheetData,
        cellsSelected: parseCellsExpressions(cells),
      },
    }));
  },
}));
export default useSpreadsheetStore;
