import Animated from "react-native-reanimated";
import { typography } from "@/styles/typography";

export function HelloWave() {
  return (
    <Animated.Text
      style={[
        typography.title,
        {
          lineHeight: 32,
          marginTop: -6,
          animationName: {
            "50%": { transform: [{ rotate: "25deg" }] },
          },
          animationIterationCount: 4,
          animationDuration: "300ms",
        },
      ]}
    >
      👋
    </Animated.Text>
  );
}
