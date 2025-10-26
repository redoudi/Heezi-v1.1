import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useRef, useState } from "react";
import { View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

export default function MascotMonitor() {
  const { tasks } = useSpreadsheetStore();
  const [taskIndex, setTaskIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [modalText, setModalText] = useState<string | null>(null);
  const stepExpectedRef = useRef<any>(null);

  return (
    <View>
      <MascotBubble />
      <MascotModal />
    </View>
  );
}
