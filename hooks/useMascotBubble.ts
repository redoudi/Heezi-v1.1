import useCursor from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import { getElementBottomHeight } from "@/utils/cursorUtils";
import { useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

export default function useMascotBubble() {
  const { levelType } = useLevelData();
  const {
    currentStep: { cursor, mascotPosition: forcedMascotPosition },
    contentsRefs,
  } = useCursor();
  const { height: windowHeight } = useWindowDimensions();
  const [componentHeight, setComponentHeight] = useState<number>(300); // Default fallback
  const [mascotPosition, setMascotPosition] = useState<ViewStyle>({
    bottom: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height);
  };

  const padding = 20;
  const minTop = 0; // Minimum top position
  const maxTop = Math.max(minTop, windowHeight - componentHeight - padding);
  useEffect(() => {
    if (forcedMascotPosition) {
      setMascotPosition(forcedMascotPosition);
    } else {
      if (cursor && contentsRefs && cursor.elementId) {
        const calculatedTop =
          cursor.elementId && contentsRefs.current[cursor.elementId]
            ? getElementBottomHeight(contentsRefs, cursor.elementId)
            : undefined;

        const calculatedTopStyle =
          calculatedTop !== undefined
            ? {
                bottom: undefined,
                top: Math.max(minTop, Math.min(calculatedTop, maxTop)),
              }
            : { bottom: 0 };
        setMascotPosition(calculatedTopStyle);
      }
    }
  }, [cursor, contentsRefs, minTop, maxTop, forcedMascotPosition]);
  return { handleLayout, mascotPosition };
}
