import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

const TASK0 = 0;
const STEP0 = -1;

export default function MascotMonitor() {
  const { tasks: levelTasks } = useSpreadsheetStore();
  const [taskIndex, setTaskIndex] = useState(TASK0);
  const [stepIndex, setStepIndex] = useState(STEP0);
  const [modalText, setModalText] = useState<string | null>(null);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const stepExpectedRef = useRef<any>(null);

  useEffect(() => {
    if (stepIndex >= 0) {
      const { tip, expected } =
        levelTasks?.at(taskIndex)?.steps?.at(stepIndex) || {};
      if (tip) setBubbleText(tip.text2);
      if (expected) stepExpectedRef.current = expected;
    }
  }, [stepIndex]);

  useEffect(() => {
    if (modalText === "") {
      setStepIndex(0);
    }
  }, [modalText]);

  useEffect(() => {
    if (taskIndex >= 0) {
      const introText = levelTasks?.at(taskIndex)?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    }
  }, [taskIndex]);

  useEffect(() => {
    if (levelTasks?.length) setTaskIndex(TASK0);
  }, [levelTasks]);

  return (
    <View>
      {!!bubbleText && (
        <MascotBubble
          bubbleText={
            levelTasks?.at(taskIndex)?.steps?.at(stepIndex)?.tip?.text2 || ""
          }
        />
      )}
      <MascotModal
        open={!!modalText?.trim()}
        onClose={() => setModalText("")}
        modalText={modalText}
      />
    </View>
  );
}
