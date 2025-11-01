import useTextEditorStore from "@/store/useTextEditorStore";

export default function useRunTextEditorPreActions() {
  const { setBlockText } = useTextEditorStore();
  const runPreAction = (preAction: any) => {
    switch (preAction.type) {
      case "blockText":
        setBlockText(preAction.blockIndex, preAction.text);
        break;
    }
  };
  return (preActionsArr) => preActionsArr.map(runPreAction);
}
