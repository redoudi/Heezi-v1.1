import { create } from "zustand";
const useSpreadsheetStore = create()((set, get) => ({
  spreadsheetData: { A1: "yeah" },
  selectedCells: [],
  setSelectedCells: (selectedCells: string[]) => {
    set((state: { selectedCells: string[] }) => ({
      selectedCells,
    }));
  },
}));
export default useSpreadsheetStore;
