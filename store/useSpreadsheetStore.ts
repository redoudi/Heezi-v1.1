import { create } from "zustand";
const useSpreadsheetStore = create()((set, get) => ({
  spreadsheetData: { A1: "yeah" },
  setCellValue: (cell: string, value: string) => {
    set((state: { spreadsheetData: { [key: string]: string } }) => ({
      spreadsheetData: { ...state.spreadsheetData, [cell]: value },
    }));
  },
  selectedCells: [],
  setSelectedCells: (selectedCells: string[]) => {
    set(() => ({
      selectedCells,
    }));
  },
}));
export default useSpreadsheetStore;
