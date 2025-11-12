import useCursor from "@/context/useCursor";
import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";

export default function Cursor() {
  const { cursorRef, cursorPosition } = useCursor();

  useEffect(() => {
    console.log("cursorPosition", cursorPosition);
  }, [cursorPosition]);

  return (
    <Image
      source={require("@/assets/images/cursor.png")}
      ref={cursorRef}
      style={[
        styles.cursor,
        {
          left: cursorPosition.x,
          top: cursorPosition.y,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  cursor: {
    position: "absolute",
    width: 20,
    height: 20,
    zIndex: 10000,
    pointerEvents: "none",
  },
});
