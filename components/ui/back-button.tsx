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

const DEFAULT_BACK_ICON_URI =
  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/iycoag37_expires_30_days.png";

export default function BackButton({
  onPress,
  containerStyle,
  imageStyle,
}: BackButtonProps) {
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress ?? (() => router.back())}
    >
      <Image
        source={{ uri: DEFAULT_BACK_ICON_URI }}
        resizeMode={"stretch"}
        style={imageStyle}
      />
    </TouchableOpacity>
  );
}
