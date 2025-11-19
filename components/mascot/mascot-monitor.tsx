import useCursor from "@/context/useCursor";
import { useKbdNextStep } from "@/hooks/use-keyboard";
import useLevelData from "@/hooks/use-level-data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Cursor from "./cursor";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

export default function MascotMonitor({
  checkConditionHook,
  runPreActionsHook,
  practiceToolData,
}: {
  checkConditionHook: (props: { stepExpectedRef: any }) => () => boolean;
  runPreActionsHook: () => (preActions: any[]) => void;
  practiceToolData: any;
}) {
  const router = useRouter();
  const {
    practiceTool,
    id,

    taskStep: taskStepParam,
  } = useLocalSearchParams();

  const { tasks: levelTasks, levelType } = useLevelData();
  const { moveCursor, hideCursor } = useCursor();
  const [modalText, setModalText] = useState<string | null>(null);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const stepExpectedRef = useRef<any>(null);
  const checkCondition = checkConditionHook({ stepExpectedRef });
  const runPreActions = runPreActionsHook();

  const runnerRef = useRef<{ step: number; task: number }>({
    step: -2,
    task: -1,
  });

  const setStepIndex = (step: number) => {
    runnerRef.current.step = step;
    handleStepIndexChange();
  };

  const nextStep = () => {
    setStepIndex(runnerRef.current.step + 1);
  };

  const setTaskIndex = (task: number) => {
    runnerRef.current.task = task;
    // setCellsSelected([]);

    if (
      levelTasks.length > 0 &&
      runnerRef.current.task > levelTasks?.length - 1
    ) {
      router.push(`/mission/${practiceTool}/${id}/result`);
    } else {
      handleStepIndexChange();
    }
  };

  const executeStep = () => {
    if (runnerRef.current.step === -1) {
      //show modal text
      const introText = levelTasks?.at(runnerRef.current.task)?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    } else {
      //run task step
      const { tip, expected, preActions, cursor } =
        levelTasks
          ?.at(runnerRef.current.task)
          ?.steps?.at(runnerRef.current.step) || {};
      setBubbleText(tip?.text2 || "");
      if (preActions) runPreActions(preActions);
      if (levelType === "practice" && expected)
        stepExpectedRef.current = expected;
      if (cursor) {
        if (cursor.elementId) {
          moveCursor(cursor.elementId, cursor.x || 0, cursor.y || 0);
        } else {
          hideCursor();
        }
      }
    }
  };

  const handleStepIndexChange = () => {
    if (
      //switch to next task if current step is the last step of the current task
      runnerRef.current.step >
      levelTasks?.at(runnerRef.current.task)?.steps?.length - 1
    ) {
      setBubbleText(null);
      runnerRef.current.step = -1;
      setTaskIndex(runnerRef.current.task + 1);
    } else {
      executeStep();
    }
  };

  useEffect(() => {
    if (practiceToolData && stepExpectedRef.current) {
      const isCorrect = checkCondition();
      if (isCorrect) {
        nextStep();
      }
    }
  }, [checkCondition, nextStep, practiceToolData]);

  useEffect(() => {
    if (levelTasks) {
      if (taskStepParam) {
        const [task, step] = taskStepParam.split(".");
        runnerRef.current.task = parseInt(task);
        runnerRef.current.step = parseInt(step);
      } else {
        runnerRef.current.step = -1;
        runnerRef.current.task = 0;
      }
      handleStepIndexChange();
    }
  }, [levelTasks, taskStepParam]);

  useKbdNextStep({ runnerRef, levelType, nextStep });

  return (
    <View style={styles.container}>
      {!!bubbleText && (
        <MascotBubble bubbleText={bubbleText} nextStep={nextStep} />
      )}
      <MascotModal
        open={!!modalText?.trim()}
        onClose={() => {
          setModalText("");
          nextStep();
        }}
        modalText={modalText}
      />
      <Cursor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "box-none",
  },
});
