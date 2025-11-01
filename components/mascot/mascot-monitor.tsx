import useLevelData from "@/hooks/use-level-data";
import useCheckSpreadsheetCondition from "@/hooks/useCheckSpreadsheetCondition";
import useRunSpreadsheetPreActions from "@/hooks/useRunSpreadsheetPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

const TASK0 = 0;
const STEP0 = 0;

export default function MascotMonitor({
  checkConditionHook,
  runPreActionsHook,
}) {
  const router = useRouter();
  const { id, task: taskParam, step: stepParam } = useLocalSearchParams();
  const { spreadsheetData, setCellsSelected } = useSpreadsheetStore();
  const { tasks: levelTasks } = useLevelData();
  const [modalText, setModalText] = useState<string | null>(null);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const stepExpectedRef = useRef<any>(null);
  const checkCondition = checkConditionHook({ stepExpectedRef });
  const runPreActions = runPreActionsHook();

  const runnerRef = useRef<{ step: number; task: number }>({
    step: -1,
    task: -1,
  });

  const setStepIndex = (step: number) => {
    runnerRef.current.step = step;
    router.setParams({ step: runnerRef.current.step });
    handleStepIndexChange();
  };

  const setTaskIndex = (task: number) => {
    runnerRef.current.task = task;
    router.setParams({ task: runnerRef.current.task });
    handleTaskIndexChange();
  };
  const nextStep = () => {
    setStepIndex(runnerRef.current.step + 1);
  };

  const handleStepIndexChange = () => {
    if (
      runnerRef.current.step >
      levelTasks?.at(runnerRef.current.task)?.steps?.length - 1
    ) {
      runnerRef.current.step = 0;
      router.setParams({ step: runnerRef.current.step });
      setTaskIndex(runnerRef.current.task + 1);
      handleTaskIndexChange();
    } else {
      const { tip, expected, preActions } =
        levelTasks
          ?.at(runnerRef.current.task)
          ?.steps?.at(runnerRef.current.step) || {};
      setBubbleText(tip?.text2 || "");
      if (preActions) runPreActions(preActions);
      if (expected) stepExpectedRef.current = expected;
    }
  };

  const handleTaskIndexChange = () => {
    setCellsSelected([]);
    setBubbleText(null);
    if (
      levelTasks.length > 0 &&
      runnerRef.current.task > levelTasks?.length - 1
    ) {
      router.push(`/mission/${id}/result`);
    } else {
      const introText = levelTasks?.at(runnerRef.current.task)?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    }
  };

  useEffect(() => {
    if (spreadsheetData && stepExpectedRef.current) {
      const isCorrect = checkCondition();
      if (isCorrect) {
        nextStep();
      }
    }
  }, [spreadsheetData]);

  useEffect(() => {
    if (modalText === "") {
      runnerRef.current.step = stepParam
        ? parseInt(stepParam as string)
        : STEP0;
      handleStepIndexChange();
    }
  }, [modalText]);

  useEffect(() => {
    if (levelTasks) {
      runnerRef.current.task = taskParam
        ? parseInt(taskParam as string)
        : TASK0;
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
