export async function exportPdf(
  _cellsIndices: string[][],
  _values: unknown[][]
): Promise<never> {
  throw new Error("PDF export is only supported on web.");
}

