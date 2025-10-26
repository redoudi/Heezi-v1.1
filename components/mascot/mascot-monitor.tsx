import useCheckCondition from "@/hooks/useCheckCondition";
import useRunPreActions from "@/hooks/useRunPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

const TASK0 = 0;
const STEP0 = -1;

export default function MascotMonitor() {
  const {
    tasks: levelTasks,
    spreadsheetData,
    selectedCells,
  } = useSpreadsheetStore();
  const [taskIndex, setTaskIndex] = useState(TASK0);
  const [stepIndex, setStepIndex] = useState(STEP0);
  const [modalText, setModalText] = useState<string | null>(null);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const stepExpectedRef = useRef<any>(null);
  const checkCondition = useCheckCondition({ stepExpectedRef });
  const runPreActions = useRunPreActions();

  useEffect(() => {
    console.log("stepIndex", stepIndex);
    console.log("taskIndex", taskIndex);
  }, [stepIndex, taskIndex]);

  useEffect(() => {
    if (spreadsheetData && stepExpectedRef.current) {
      const isCorrect = checkCondition();
      console.log("isCorrect", isCorrect);
      if (isCorrect) {
        setStepIndex(stepIndex + 1);
      }
    }
  }, [spreadsheetData, selectedCells]);

  useEffect(() => {
    if (stepIndex === levelTasks?.length - 1) {
      setBubbleText("");
      setTaskIndex(taskIndex + 1);
    } else if (stepIndex >= 0) {
      const { tip, expected, preActions } =
        levelTasks?.at(taskIndex)?.steps?.at(stepIndex) || {};
      setBubbleText(tip?.text2 || "");
      if (preActions) runPreActions(preActions);
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
      setStepIndex(-1);
      const introText = levelTasks?.at(taskIndex)?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    }
  }, [taskIndex, levelTasks]);

  return (
    <View>
      <Text style={{ color: "red", fontSize: 50, fontWeight: "bold" }}>
        {taskIndex}.{stepIndex}
      </Text>
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
