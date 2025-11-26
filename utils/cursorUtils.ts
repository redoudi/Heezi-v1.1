export const getElementBottomHeight = (
  contentsRefs: any,
  elementId: string
) => {
  const ref = contentsRefs.current[elementId];
  if (ref && ref.current) {
    const element = ref.current;
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height;
  }
};
