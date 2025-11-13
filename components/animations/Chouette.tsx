import LottieView from "lottie-react-native";
import { useRef } from "react";
import { StyleSheet, ViewStyle } from "react-native";

const animationData = require("./Chouette.json");

interface ChouetteProps {
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

export default function Chouette({
  loop = true,
  autoplay = true,

  speed = 1,
  onAnimationFinish,
}: ChouetteProps) {
  const animationRef = useRef<LottieView>(null);

  return (
    <LottieView
      ref={animationRef}
      source={animationData}
      style={styles.animation}
      loop={loop}
      autoPlay={autoplay}
      speed={speed}
      onAnimationFinish={onAnimationFinish}
    />
  );
}

const styles = StyleSheet.create({
  animation: {
    aspectRatio: 1, // 1000x1000 = 1:1 aspect ratio
  },
});
