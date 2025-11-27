import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, ImageStyle, StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { ThemedText } from "@/components/themed-text";

function TriangleIcon({ style }: { style: StyleProp<ImageStyle> }) {
  return (
    <Image
      source={require("@/assets/images/q6vunbbw_expires_30_days.png")}
      resizeMode={"stretch"}
      style={style}
    />
  );
}

export const ButtonWithArrow = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  triangleIconStyle?: StyleProp<ImageStyle>;
}) => {
  const {
    toolConstants: { color },
  } = usePracticeToolConstants();
  const toolColorStyle = color ? { backgroundColor: color } : {};
  return (
    <TouchableOpacity
      style={[styles.buttonRow, toolColorStyle]}
      onPress={onPress}
    >
      <ThemedText style={[{ fontSize: 18, fontWeight: "bold" }, styles.text7]}>{text}</ThemedText>
      <TriangleIcon style={[styles.triangleIcon]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    alignSelf: "flex-end",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text7: {
    color: "#0A2924",
    marginRight: 11,
  },
  triangleIcon: {
    alignSelf: "center",
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
