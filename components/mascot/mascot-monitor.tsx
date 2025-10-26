import { levelFiles } from "@/assets/levels/indexLevels";
import usePracticeTool from "@/context/usePracticeTool";
import useCheckCondition from "@/hooks/useCheckCondition";
import useRunPreActions from "@/hooks/useRunPreActions";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import MascotBubble from "./mascot-bubble";
import MascotModal from "./mascot-modal";

const TASK0 = 0;
const STEP0 = -1;

export default function MascotMonitor() {
  const { id } = useLocalSearchParams();
  const { practiceTool } = usePracticeTool();
  useEffect(() => {
    if (id && practiceTool) {
      const levelData = levelFiles[practiceTool]?.[id as string];
      if (levelData?.tasks) {
        setTasks(levelData.tasks);
      }
    }
  }, [practiceTool, id]);

  const { tasks: levelTasks, spreadsheetData } = useSpreadsheetStore();
  const [tasks, setTasks] = useState<any[]>([]);
  const [taskIndex, setTaskIndex] = useState(-1);
  const [stepIndex, setStepIndex] = useState(-1);
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
  }, [spreadsheetData]);

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

  useEffect(() => {
    if (tasks) {
      setTaskIndex(0);
    }
  }, [tasks]);

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
