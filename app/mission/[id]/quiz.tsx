import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export default function QuizScreen() {
  const [question, setQuestion] = useState("...?");
  const [modalText, setModalText] = useState("");
  const { id, task: taskParam, step: stepParam } = useLocalSearchParams();

  const { levelData } = useLevelData();

  const runnerRef = useRef<{ step: number; task: number }>({
    step: -1,
    task: -1,
  });

  const setTaskIndex = (task: number) => {
    if (
      levelData?.tasks?.length &&
      runnerRef.current.task > levelData.tasks.length - 1
    ) {
      router.push(`/mission/${id}/result`);
    } else {
      runnerRef.current.task = task;
      router.setParams({ task: runnerRef.current.task });
      handleTaskIndexChange();
    }
  };

  const handleTaskIndexChange = () => {
    const currentTask = levelData?.tasks?.at(runnerRef.current.task);
    console.log("currentTask", currentTask);
    const introText = currentTask?.intro;
    console.log("introText", introText);
    if (introText && introText.trim() !== "") setModalText(introText);
  };

  useEffect(() => {
    console.log("levelData", levelData);
    if (levelData?.tasks?.length) {
      setTaskIndex(taskParam ? parseInt(taskParam as string) : 0);
    }
  }, [levelData]);

  return (
    <QuizBody
      question={question}
      modalText={modalText}
      answers={[]}
      closeModal={() => setModalText("")}
    />
  );
}
