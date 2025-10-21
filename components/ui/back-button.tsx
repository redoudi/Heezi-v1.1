import { router } from "expo-router";
import {
  Image,
  TouchableOpacity,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from "react-native";

type BackButtonProps = {
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

export default function BackButton({
  containerStyle,
  imageStyle,
}: BackButtonProps) {
  return (
    <TouchableOpacity style={containerStyle} onPress={() => router.back()}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/iycoag37_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={imageStyle}
      />
    </TouchableOpacity>
  );
}
