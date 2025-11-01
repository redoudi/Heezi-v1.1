import useTextEditorStore from "@/store/useTextEditorStore";

export default function useCheckTextEditorCondition({
  stepExpectedRef,
}: {
  stepExpectedRef: any;
}) {
  const { contentBlocks } = useTextEditorStore();
  return () => {
    switch (stepExpectedRef.current.type) {
      case "blockText":
        const currentText =
          contentBlocks?.length > 0 &&
          contentBlocks.at(parseInt(stepExpectedRef.current.blockIndex))?.text;
        return currentText === stepExpectedRef.current.text;
      case "style":
        const currentStyle =
          contentBlocks?.length > 0 &&
          contentBlocks.at(parseInt(stepExpectedRef.current.blockIndex))?.style;
        return (
          currentStyle?.[
            stepExpectedRef.current.property as keyof typeof currentStyle
          ] === stepExpectedRef.current.value
        );
    }
  };
}
