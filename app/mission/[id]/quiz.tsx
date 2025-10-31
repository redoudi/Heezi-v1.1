import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export default function QuizScreen() {
  const [question, setQuestion] = useState("...?");
  const [answers, setAnswers] = useState<
    { text: string; isCorrect?: boolean }[]
  >([]);
  const [modalText, setModalText] = useState("");
  const { id, task: taskParam, step: stepParam } = useLocalSearchParams();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const selectAnswer = (index: number) => setSelectedAnswerIndex(index);

  const { tasks } = useLevelData();

  const runnerRef = useRef<{ step: number; task: number }>({
    step: -1,
    task: -1,
  });

  const setStepIndex = (step: number) => {
    runnerRef.current.step = step;
    router.setParams({ step: runnerRef.current.step });
    if (
      runnerRef.current.step >
      tasks.at(runnerRef.current.task)?.steps?.length - 1
    ) {
      runnerRef.current.step = -1;
      setTaskIndex(runnerRef.current.task + 1);
    } else {
      setSelectedAnswerIndex(-1);
      const currentStep = tasks
        .at(runnerRef.current.task)
        ?.steps?.at(runnerRef.current.step);
      setQuestion(currentStep?.question || "");
      setAnswers(currentStep?.answers || []);
    }
  };

  const setTaskIndex = (task: number) => {
    if (tasks?.length && runnerRef.current.task > tasks.length - 1) {
      router.push(`/mission/${id}/result`);
    } else {
      runnerRef.current.task = task;
      router.setParams({ task: runnerRef.current.task });
      const currentTask = tasks?.at(runnerRef.current.task);
      const introText = currentTask?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    }
  };

  const verifyAnswer = () => {
    if (selectedAnswerIndex === null) return;
    const isCorrect = answers.at(selectedAnswerIndex)?.isCorrect;
    if (isCorrect) setStepIndex(runnerRef.current.step + 1);
  };

  useEffect(() => {
    if (modalText === "") {
      setStepIndex(stepParam ? parseInt(stepParam as string) : 0);
    }
  }, [modalText, stepParam, tasks]);

  useEffect(() => {
    if (tasks?.length) {
      setTaskIndex(taskParam ? parseInt(taskParam as string) : 0);
    }
  }, [tasks, taskParam]);

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
