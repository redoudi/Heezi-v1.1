import useTextEditorStore from "@/store/useTextEditorStore";

export default function useCheckTextEditorCondition({
  stepExpectedRef,
}: {
  stepExpectedRef: any;
}) {
  const { contentBlocks, getBlockById } = useTextEditorStore();
  return () => {
    switch (stepExpectedRef.current.type) {
      case "blockText":
        return (
          getBlockById(stepExpectedRef.current.blockId)?.text ===
          stepExpectedRef.current.text
        );

      case "style":
        return (
          getBlockById(stepExpectedRef.current.blockId)?.style[
            stepExpectedRef.current.property
          ] === stepExpectedRef.current.value
        );
      default:
        return false;
    }
  };
}
