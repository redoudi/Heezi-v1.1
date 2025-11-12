import useCursor from "@/context/useCursor";
import { useEffect } from "react";
import { Image } from "react-native";

export default function Cursor() {
  const { cursorRef, cursorPosition } = useCursor();

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPosition.x}px`;
      cursorRef.current.style.top = `${cursorPosition.y}px`;
    }
  }, [cursorPosition]);

  return (
    <Image
      source={require("@/assets/images/cursor.png")}
      ref={cursorRef}
      style={{
        position: "absolute",
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    />
  );
}
