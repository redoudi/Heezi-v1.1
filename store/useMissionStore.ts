import { create } from "zustand";
const useMissionStore = create()((set, get) => ({
  spreadsheetData: {
    selected: { x: -1, y: -1, w: 1, h: 1 },
    grid_data: { A1: "yeah" },
  },
}));
export default useMissionStore;
