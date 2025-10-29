import useCheckCondition from "@/hooks/useCheckCondition";
import useRunPreActions from "@/hooks/useRunPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

const TASK0 = 0;
const STEP0 = 0;

export default function MascotMonitor() {
  const { id } = useLocalSearchParams();
  const { tasks: levelTasks, spreadsheetData } = useSpreadsheetStore();
  const [modalText, setModalText] = useState<string | null>(null);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const stepExpectedRef = useRef<any>(null);
  const checkCondition = useCheckCondition({ stepExpectedRef });
  const runPreActions = useRunPreActions();
  const taskIndexRef = useRef<number>(-1);
  const stepIndexRef = useRef<number>(-1);

  const nextStep = () => {
    stepIndexRef.current = stepIndexRef.current + 1;
    handleStepIndexChange();
  };

  useEffect(() => {
    if (spreadsheetData && stepExpectedRef.current) {
      const isCorrect = checkCondition();
      if (isCorrect) {
        nextStep();
      }
    }
  }, [spreadsheetData]);

  const handleStepIndexChange = () => {
    if (
      stepIndexRef.current >
      levelTasks?.at(taskIndexRef.current)?.steps?.length - 1
    ) {
      stepIndexRef.current = -1;
      taskIndexRef.current = taskIndexRef.current + 1;
      handleTaskIndexChange();
    } else {
      const { tip, expected, preActions } =
        levelTasks?.at(taskIndexRef.current)?.steps?.at(stepIndexRef.current) ||
        {};
      setBubbleText(tip?.text2 || "");
      if (preActions) runPreActions(preActions);
      if (expected) stepExpectedRef.current = expected;
    }
  };

  useEffect(() => {
    if (modalText === "") {
      stepIndexRef.current = STEP0;
      handleStepIndexChange();
    }
  }, [modalText]);

  const handleTaskIndexChange = () => {
    setBubbleText(null);
    if (
      levelTasks.length > 0 &&
      taskIndexRef.current > levelTasks?.length - 1
    ) {
      router.push(`/mission/${id}/export`);
      return;
    }
    const introText = levelTasks?.at(taskIndexRef.current)?.intro;
    if (introText && introText.trim() !== "") setModalText(introText);
  };

  useEffect(() => {
    if (levelTasks) {
      taskIndexRef.current = TASK0;
      handleTaskIndexChange();
    }
  }, [levelTasks]);

  return (
    <View>
      {!!bubbleText && (
        <MascotBubble bubbleText={bubbleText} nextStep={nextStep} />
      )}
      <MascotModal
        open={!!modalText?.trim()}
        onClose={() => setModalText("")}
        modalText={modalText}
      />
    </View>
  );
}
