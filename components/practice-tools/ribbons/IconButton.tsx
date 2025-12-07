import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import styles from "./RibbonStyles";

export default function IconButton({
  iconSource,
}: {
  iconSource: ImageSourcePropType;
}) {
  return (
    <TouchableOpacity style={styles.buttonMd} onPress={() => {}} disabled>
      <Image
        source={iconSource}
        resizeMode={"contain"}
        style={styles.buttonIconMd}
      />
    </TouchableOpacity>
  );
}
