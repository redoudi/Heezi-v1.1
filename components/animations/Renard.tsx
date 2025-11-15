import LottieView from "lottie-react-native";

const renardData = require("./Renard.json");

export default function CustomAnimation({
  animationData = renardData,
}: {
  animationData: any;
}) {
  return <LottieView source={animationData} loop={true} autoPlay={true} />;
}
