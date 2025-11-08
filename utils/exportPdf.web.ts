const MARGIN = 48;
const HEADING_OFFSET = 56;
const ROW_HEIGHT = 64;
const JSPDF_SCRIPT_ID = "jspdf-cdn-script";
const JSPDF_CDN_URL =
  "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js";

type JsPDFConstructor = typeof import("jspdf")["jsPDF"];

declare global {
  interface Window {
    jspdf?: { jsPDF: JsPDFConstructor };
  }
}

let jsPdfPromise: Promise<JsPDFConstructor> | null = null;

async function loadJsPdfFromCdn(): Promise<JsPDFConstructor> {
  if (typeof window === "undefined") {
    throw new Error("PDF export is only supported in a browser environment.");
  }

  if (window.jspdf?.jsPDF) {
    return window.jspdf.jsPDF;
  }

  if (!jsPdfPromise) {
    jsPdfPromise = new Promise<JsPDFConstructor>((resolve, reject) => {
      const scriptId = JSPDF_SCRIPT_ID;
      const existingScript = document.getElementById(
        scriptId
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.addEventListener("load", () => {
          if (window.jspdf?.jsPDF) {
            resolve(window.jspdf.jsPDF);
          } else {
            reject(new Error("Failed to initialize jsPDF from CDN."));
          }
        });
        existingScript.addEventListener("error", () => {
          reject(new Error("Failed to load jsPDF CDN script."));
        });
        return;
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = JSPDF_CDN_URL;
      script.async = true;
      script.onload = () => {
        if (window.jspdf?.jsPDF) {
          resolve(window.jspdf.jsPDF);
        } else {
          reject(new Error("Failed to initialize jsPDF from CDN."));
        }
      };
      script.onerror = () => {
        reject(new Error("Failed to load jsPDF CDN script."));
      };
      document.body.appendChild(script);
    });
  }

  return jsPdfPromise;
}

export async function exportPdf(
  cellsIndices: string[][],
  values: unknown[][]
): Promise<void> {
  if (!cellsIndices.length) {
    throw new Error("Nothing to export");
  }

  const columnCount = cellsIndices[0]?.length ?? 0;

  if (!columnCount) {
    throw new Error("No columns detected");
  }

  const jsPDF = await loadJsPdfFromCdn();

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const availableWidth = pageWidth - MARGIN * 2;
  const columnWidth = availableWidth / columnCount;

  const generatedAt = new Date().toLocaleString();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(10, 41, 36);
  doc.text("Heezi Spreadsheet Export", MARGIN, MARGIN);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(96, 131, 123);

  doc.setDrawColor(199, 213, 209);

  let cursorY = MARGIN + HEADING_OFFSET;

  cellsIndices.forEach((row, rowIndex) => {
    if (cursorY + ROW_HEIGHT > pageHeight - MARGIN) {
      doc.addPage();
      cursorY = MARGIN;
    }

    row.forEach((_, columnIndex) => {
      const x = MARGIN + columnIndex * columnWidth;
      const rawValue = values[rowIndex]?.[columnIndex];
      const displayValue = formatCellValue(rawValue);

      doc.rect(x, cursorY - 18, columnWidth, ROW_HEIGHT, "S");

      doc.setFont("helvetica", "normal");
      doc.setFontSize(13);
      doc.setTextColor(10, 41, 36);

      const textWidth = columnWidth - 20;
      const content = displayValue.length ? displayValue : " ";
      const wrapped = doc.splitTextToSize(content, textWidth);
      doc.text(wrapped, x + 10, cursorY - 6, {
        baseline: "top",
        lineHeightFactor: 1.2,
      });
    });

    cursorY += ROW_HEIGHT;
  });

  const filename = `heezi-export-${new Date().toISOString().split("T")[0]}.pdf`;

  doc.save(filename);
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
