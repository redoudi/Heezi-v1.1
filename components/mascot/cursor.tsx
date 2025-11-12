import { Image } from "react-native";

export default function Cursor({ ref }: { ref: any }) {
  return <Image source={require("@/assets/images/cursor.png")} ref={ref} />;
}
