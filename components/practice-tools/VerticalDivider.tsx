import { View } from "react-native";

export default function VerticalDivider() {
  return (
    <View
      style={{
        width: 1,
        backgroundColor: "darkgray",

        alignSelf: "stretch",
      }}
    />
  );
}
