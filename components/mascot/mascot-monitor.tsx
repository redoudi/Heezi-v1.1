import { View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

export default function MascotMonitor() {
  return (
    <View>
      <MascotBubble />
      <MascotModal />
    </View>
  );
}
