import useCursor from "@/context/useCursor";

export default function useHighlight(elementId: string) {
  const {
    currentStep: { highlight },
  } = useCursor();

  const isHighlighted = highlight?.elementId === elementId;

  const hightlightedStyleDef = {
    borderColor: "red",
    borderWidth: 6,
    borderStyle: "dotted",
  };

  const hightlightedStyle = isHighlighted ? hightlightedStyleDef : {};

  return { isHighlighted, hightlightedStyle };
}
