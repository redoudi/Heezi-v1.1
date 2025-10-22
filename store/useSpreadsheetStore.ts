import { create } from "zustand";
const useSpreadsheetStore = create()((set, get) => ({
  spreadsheetData: {
    selected: [],
    grid_data: { A1: "yeah" },
  },
  setSelected: (selected: string[]) => {
    set((state: { spreadsheetData: { selected: string[] } }) => ({
      spreadsheetData: { ...state.spreadsheetData, selected },
    }));
  },
}));
export default useSpreadsheetStore;
