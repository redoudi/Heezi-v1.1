const levelsCompleted = {
  spreadsheet: { 1: false, 2: false, 3: false },
  textEditor: { 1: false, 2: false, 3: false },
};

const getPercentage = (toolLevelsCompleted: Record<string, boolean>) => {
  const levelsCompleted =
    Object.values(toolLevelsCompleted).filter(Boolean).length;
  return (levelsCompleted / Object.values(toolLevelsCompleted).length) * 100;
};
