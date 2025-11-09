const MIME_TYPE = "application/vnd.ms-excel";
const UTF8_BOM = "\ufeff";

export function exportXlsx(
  contents: { value: unknown; style: { [key: string]: any } }[][]
): void {
  if (!contents.length) {
    throw new Error("Nothing to export");
  }

  const tableRows = contents
    .map((row) => {
      const cells = row
        .map((cell) => `<td>${escapeHtml(formatCellValue(cell.value))}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  const html = `${UTF8_BOM}<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Heezi Spreadsheet Export</title>
      <style>
        table {
          border-collapse: collapse;
        }

        td {
          border: 1px solid #c7d5d1;
          padding: 8px 12px;
          white-space: pre-wrap;
        }
      </style>
    </head>
    <body>
      <table>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </body>
  </html>`;

  const blob = new Blob([html], { type: MIME_TYPE });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filename = `heezi-export-${new Date().toISOString().split("T")[0]}.xls`;

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 0);
}

function formatCellValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "boolean") {
    return value ? "TRUE" : "FALSE";
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value.toString() : "";
  }

  return String(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
