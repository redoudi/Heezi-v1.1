import useCursor from "@/context/useCursor";
import { getElementTopPosition } from "@/utils/cursorUtils";
import { isMobile } from "@/utils/isMobile";
import { useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

export default function useMascotBubble() {
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
  const minBottom = 0;
  const maxBottom = Math.max(
    minBottom,
    windowHeight - componentHeight - padding
  );
  useEffect(() => {
    if (isMobile && forcedMascotPosition) {
      setMascotPosition(forcedMascotPosition);
    } else {
      if (cursor && contentsRefs && cursor.elementId) {
        const elementTop =
          cursor.elementId && contentsRefs.current[cursor.elementId]
            ? getElementTopPosition(contentsRefs, cursor.elementId)
            : undefined;

        const calculatedBottomStyle =
          elementTop !== undefined
            ? {
                top: undefined,
                bottom: Math.max(
                  minBottom,
                  Math.min(windowHeight - elementTop + 8, maxBottom)
                ),
              }
            : { bottom: 0 };
        setMascotPosition(calculatedBottomStyle);
      }
    }
  }, [
    componentHeight,
    cursor,
    contentsRefs,
    maxBottom,
    minBottom,
    forcedMascotPosition,
    windowHeight,
  ]);
  return { handleLayout, mascotPosition };
}
