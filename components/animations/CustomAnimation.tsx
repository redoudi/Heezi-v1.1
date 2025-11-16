import LottieView from "lottie-react-native";

export default function CustomAnimation({
  animationData,
}: {
  animationData: any;
}) {
  return (
    <LottieView
      source={animationData}
      loop={true}
      autoPlay={true}
      resizeMode="cover"
    />
  );
}
