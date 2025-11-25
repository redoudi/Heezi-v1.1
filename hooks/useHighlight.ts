import useCursor from "@/context/useCursor";

export default function useHighlight(elementId: string) {
  const {
    currentStep: { highlight },
  } = useCursor();

  const isHighlighted = highlight?.elementId === elementId;
  return { isHighlighted };
}
