import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useState } from "react";
import { View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

const TASK0 = 0;
const STEP0 = 0;

export default function MascotMonitor() {
  const { tasks } = useSpreadsheetStore();
  const [taskIndex, setTaskIndex] = useState(TASK0);
  const [stepIndex, setStepIndex] = useState(STEP0);
  const [modalText, setModalText] = useState<string | null>(null);

  return (
    <View>
      <MascotBubble />
      <MascotModal
        open={!!modalText?.trim()}
        onClose={() => setModalText(null)}
        modalText={modalText}
      />
    </View>
  );
}
