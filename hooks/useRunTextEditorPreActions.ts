import useTextEditorStore from "@/store/useTextEditorStore";

export default function useRunTextEditorPreActions() {
  const { setBlockText, setSelectedBlockIndex, setBlockStyle } =
    useTextEditorStore();
  const runPreAction = (preAction: any) => {
    switch (preAction.type) {
      case "blockText":
        setBlockText(Number(preAction.blockIndex), preAction.text);
        break;
      case "selectBlock":
        setSelectedBlockIndex(Number(preAction.blockIndex));
        break;
      case "style":
        setBlockStyle(Number(preAction.blockIndex), preAction.value);
        break;
    }
  };
  return (preActionsArr: any[]) => preActionsArr.map(runPreAction);
}
