export const rangeToCells = (range: string) => {
  // range is like "A1:A3"
  // return an array of cells like ["A1", "A2", "A3"]
  const [start, end] = range.split(":");
  const startColumn = start.charAt(0);
  const startRow = parseInt(start.charAt(1));
  const endColumn = end.charAt(0);
  const endRow = parseInt(end.charAt(1));
  const cells: string[] = [];
  for (let row = startRow; row <= endRow; row++) {
    for (
      let column: number = startColumn.charCodeAt(0);
      column <= endColumn.charCodeAt(0);
      column++
    ) {
      cells.push(`${String.fromCharCode(column)}${row}`);
    }
  }
  return cells;
};

const isCellKey = (cellExpression: string) => {
  //check if cellExpression is a valid cell key like "A1", "A10"
  return /^[A-Z]+\d+$/.test(cellExpression);
};

const isRangeOfCellKeys = (cellExpression: string) => {
  //check if cellExpression is a valid range of cell keys like "A1:A10"
  return /^[A-Z]+\d+:[A-Z]+\d+$/.test(cellExpression);
};

const parseCellExpression = (cellExpression: string): string[] => {
  if (isCellKey(cellExpression)) {
    return [cellExpression];
  } else if (isRangeOfCellKeys(cellExpression)) {
    return rangeToCells(cellExpression);
  } else {
    throw new Error(`Invalid cell expression: ${cellExpression}`);
  }
};

export const parseCellsExpressions = (
  argCells: string[] | string | undefined | null
): string[] => {
  // Handle case where argCells is not an array
  if (!argCells) {
    return [];
  }

  // If it's a string, convert it to an array
  const cellsArray = Array.isArray(argCells) ? argCells : [argCells];

  const finalCells: string[] = [];
  cellsArray.forEach((cellExpression) => {
    finalCells.push(...parseCellExpression(cellExpression));
  });
  return finalCells;
};
