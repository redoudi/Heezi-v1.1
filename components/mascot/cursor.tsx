import useCursor from "@/context/useCursor";
import { useEffect, useRef } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function Cursor() {
  const { cursorRef, cursorPosition } = useCursor();
  const screenHeight = Dimensions.get("window").height;
  const isInitialMount = useRef(true);

  // Initialize at bottom left of screen
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(screenHeight - 20);

  useEffect(() => {
    console.log("cursorPosition", cursorPosition);

    // Skip animation on initial mount (when position is default 0, 0)
    // Only animate when we receive a real target position
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // If we have a valid target on mount, animate to it
      if (cursorPosition.x !== 0 || cursorPosition.y !== 0) {
        animatedX.value = withTiming(cursorPosition.x, {
          duration: 800,
        });
        animatedY.value = withTiming(cursorPosition.y, {
          duration: 800,
        });
      }
    } else {
      // Subsequent updates: always animate to new position
      animatedX.value = withTiming(cursorPosition.x, {
        duration: 800,
      });
      animatedY.value = withTiming(cursorPosition.y, {
        duration: 800,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorPosition.x, cursorPosition.y]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: animatedX.value,
      top: animatedY.value,
    };
  });

  return (
    <AnimatedImage
      source={require("@/assets/images/cursor.png")}
      ref={cursorRef}
      style={[styles.cursor, animatedStyle]}
    />
  );
}

const styles = StyleSheet.create({
  cursor: {
    position: "absolute",
    width: 20,
    height: 20,
    zIndex: 10000,
    pointerEvents: "none",
  },
});
