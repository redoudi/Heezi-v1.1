import { create } from "zustand";
const useSpreadsheetStore = create()((set, get) => ({
  spreadsheetData: {},
  selectedCells: [],
  levelData: {},
  setLevelData: (levelData: any) => {
    set(() => ({
      levelData,
      spreadsheetData: {
        ...levelData.spreadsheetData,
      },
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
