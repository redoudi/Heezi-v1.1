import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export default function QuizScreen() {
  const [question, setQuestion] = useState("...?");
  const [answers, setAnswers] = useState<string[]>([]);
  const [modalText, setModalText] = useState("");
  const { id, task: taskParam, step: stepParam } = useLocalSearchParams();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const selectAnswer = (index: number) => setSelectedAnswerIndex(index);

  const { levelData } = useLevelData();
  const tasks = levelData?.tasks || [];

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
    if (tasks?.length && runnerRef.current.task > levelData.tasks.length - 1) {
      router.push(`/mission/${id}/result`);
    } else {
      runnerRef.current.task = task;
      router.setParams({ task: runnerRef.current.task });
      handleTaskIndexChange();
    }
  };

  const handleTaskIndexChange = () => {
    const currentTask = tasks?.at(runnerRef.current.task);
    const introText = currentTask?.intro;
    if (introText && introText.trim() !== "") setModalText(introText);
  };

  const handleStepIndexChange = () => {
    if (
      runnerRef.current.step >
      tasks.at(runnerRef.current.task)?.steps?.length - 1
    ) {
      runnerRef.current.step = 0;
      setTaskIndex(runnerRef.current.task + 1);
    } else {
      const currentStep = tasks
        .at(runnerRef.current.task)
        ?.steps?.at(runnerRef.current.step);
      setQuestion(currentStep?.question || "");
      setAnswers(currentStep?.answers || []);
    }
  };

  const verifyAnswer = () => {
    const isCorrect = answers.at(selectedAnswerIndex)?.isCorrect;
    if (isCorrect) setStepIndex(runnerRef.current.step + 1);
  };

  useEffect(() => {
    if (modalText === "") {
      setStepIndex(stepParam ? parseInt(stepParam as string) : 0);
    }
  }, [modalText]);

  useEffect(() => {
    if (tasks?.length) {
      setTaskIndex(taskParam ? parseInt(taskParam as string) : 0);
    }
  }, [levelData]);

  return (
    <QuizBody
      modalText={modalText}
      closeModal={() => setModalText("")}
      question={question}
      answers={answers}
      selectAnswer={selectAnswer}
      selectedAnswerIndex={selectedAnswerIndex}
      verifyAnswer={verifyAnswer}
    />
  );
}
