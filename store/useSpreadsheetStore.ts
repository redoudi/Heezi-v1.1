import { create } from "zustand";
const useSpreadsheetStore = create()((set, get) => ({
  spreadsheetData: {},
  selectedCells: [],
  missionTasks: [],
  intro: "",
  setLevelData: (levelData: any) => {
    const { spreadsheetData, missionTasks, intro } = levelData;
    set(() => ({
      spreadsheetData,
      missionTasks,
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
