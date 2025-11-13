import LottieView from "lottie-react-native";
import { useRef } from "react";
import { ViewStyle } from "react-native";

const animationData = require("./Renard.json");

interface RenardProps {
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

export default function Renard({
  loop = true,
  autoplay = true,
  speed = 1,
  onAnimationFinish,
}: RenardProps) {
  const animationRef = useRef<LottieView>(null);

  return (
    <LottieView
      ref={animationRef}
      source={animationData}
      loop={loop}
      autoPlay={autoplay}
      speed={speed}
      onAnimationFinish={onAnimationFinish}
    />
  );
}
