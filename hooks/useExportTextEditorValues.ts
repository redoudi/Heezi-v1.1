import useTextEditorStore from "@/store/useTextEditorStore";
import useLoadTextEditor from "./useLoadTextEditor";

export default function useExportSpreadsheetValues() {
  useLoadTextEditor();
  const { contentBlocks } = useTextEditorStore();
  return { contents: contentBlocks };
}
