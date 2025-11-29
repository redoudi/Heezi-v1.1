import LottieView from "lottie-react-native";
import { StyleProp, ViewStyle } from "react-native";

export default function CustomAnimation({
  animationData,
  style,
}: {
  animationData: any;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <LottieView
      source={animationData}
      loop={true}
      autoPlay={true}
      resizeMode="cover"
      style={style}
    />
  );
}
