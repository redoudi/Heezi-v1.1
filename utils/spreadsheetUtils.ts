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

const parseCellExpressionRec = (cellExpression: string, outputCells = []) => {
  if (isCellKey(cellExpression)) {
    return cellExpression;
  } else if (isRangeOfCellKeys(cellExpression)) {
    rangeToCells(cellExpression).forEach((cellKey: string) =>
      outputCells.push(cellKey)
    );
  } else {
    throw new Error(`Invalid cell expression: ${cellExpression}`);
  }
};

export const parseCellsExpressions = (argCells: string[]) => {
  const finalCells: string[] = [];
  argCells.forEach((cellExpression) => {
    finalCells.push(parseCellExpressionRec(cellExpression));
  });
  return finalCells;
};
