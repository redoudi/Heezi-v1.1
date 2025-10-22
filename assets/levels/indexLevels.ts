const levelFiles: Record<string, any> = {
  spreadsheet: { 1: require("@/assets/levels/spreadsheet/lvl1.json") },
};

const getLevelData = (practiceTool: string, id: string) => {
  return levelFiles[practiceTool][id];
};

export default getLevelData;
