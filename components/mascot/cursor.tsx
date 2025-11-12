import { useRef } from "react";
import { Image } from "react-native";

export default function Cursor() {
  const cursorRef = useRef<any>(null);
  return (
    <Image source={require("@/assets/images/cursor.png")} ref={cursorRef} />
  );
}
