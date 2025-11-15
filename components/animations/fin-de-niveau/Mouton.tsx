import LottieView from "lottie-react-native";
import { useRef } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

const animationData = require("./Mouton.json");

interface MoutonProps {
  /**
   * Whether the animation should loop
   * @default true
   */
  loop?: boolean;
  /**
   * Whether the animation should autoplay
   * @default true
   */
  autoplay?: boolean;
  /**
   * Custom style for the container
   */
  style?: ViewStyle;
  /**
   * Animation speed multiplier
   * @default 1
   */
  speed?: number;
  /**
   * Callback when animation finishes
   */
  onAnimationFinish?: () => void;
}

export default function Mouton({
  loop = true,
  autoplay = true,
  style,
  speed = 1,
  onAnimationFinish,
}: MoutonProps) {
  const animationRef = useRef<LottieView>(null);

  return (
    <View style={[styles.container, style]}>
      <LottieView
        ref={animationRef}
        source={animationData}
        style={styles.animation}
        loop={loop}
        autoPlay={autoplay}
        speed={speed}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: "100%",
    aspectRatio: 1, // 1:1 aspect ratio
    maxHeight: "100%",
  },
});

