import { Image } from "react-native";

export default function Cursor({
  ref,
  cursorPosition,
}: {
  ref: any;
  cursorPosition: { x: number; y: number };
}) {
  return <Image source={require("@/assets/images/cursor.png")} ref={ref} />;
}
