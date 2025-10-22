const levelFiles: Record<string, any> = {
  1: require("@assets/levels/spreadsheet/lvl1.json"),
};

export function getLevelData(key: keyof typeof levelFiles) {
  return levelFiles[key];
}
