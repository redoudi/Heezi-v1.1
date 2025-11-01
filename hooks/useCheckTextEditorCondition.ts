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
        console.log("currentText", currentText);
        console.log(
          "stepExpectedRef.current.text",
          stepExpectedRef.current.text
        );
        return currentText === stepExpectedRef.current.text;
    }
  };
}
