import useTextEditorStore from "@/store/useTextEditorStore";

export default function useRunTextEditorPreActions() {
  const { setBlockText } = useTextEditorStore();
  const runPreAction = (preAction: any) => {
    switch (preAction.type) {
      case "blockText":
        setBlockText(Number(preAction.blockIndex), preAction.text);
        break;
    }
  };
  return (preActionsArr: any[]) => preActionsArr.map(runPreAction);
}
