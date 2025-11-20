import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

export default function QuizScreen() {
  const [question, setQuestion] = useState("...?");
  const [answers, setAnswers] = useState<
    { text: string; isCorrect?: boolean }[]
  >([]);
  const [modalText, setModalText] = useState("");
  const {
    practiceTool,
    id,
    task: taskParam,
    step: stepParam,
  } = useLocalSearchParams();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isVerified, setIsVerified] = useState(false);

  const selectAnswer = (index: number) => setSelectedAnswerIndex(index);

  const { tasks } = useLevelData();

  const runnerRef = useRef<{ step: number; task: number }>({
    step: -1,
    task: -1,
  });

  const setStepIndex = (step: number) => {
    runnerRef.current.step = step;
    router.setParams({ step: runnerRef.current.step.toString() });
    if (
      runnerRef.current.step >
      tasks.at(runnerRef.current.task)?.steps?.length - 1
    ) {
      runnerRef.current.step = -1;
      setTaskIndex(runnerRef.current.task + 1);
    } else {
      setSelectedAnswerIndex(-1);
      setIsVerified(false);
      const currentStep = tasks
        .at(runnerRef.current.task)
        ?.steps?.at(runnerRef.current.step);
      setQuestion(currentStep?.question || "");
      setAnswers(currentStep?.answers || []);
    }
  };

  const setTaskIndex = (task: number) => {
    if (tasks?.length && runnerRef.current.task > tasks.length - 1) {
      router.push(`/mission/${practiceTool}/${id}/result`);
    } else {
      runnerRef.current.task = task;
      router.setParams({ task: runnerRef.current.task.toString() });
      const currentTask = tasks?.at(runnerRef.current.task);
      const introText = currentTask?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    }
  };

  const nextStep = () => {
    setStepIndex(runnerRef.current.step + 1);
  };

  const verifyAnswer = () => {
    if (selectedAnswerIndex === null) return;
    setIsVerified(true);

    // If the answer is correct, automatically proceed to next step
    const selectedAnswer = answers[selectedAnswerIndex];
    if (selectedAnswer?.isCorrect) {
      // Small delay to show the correct answer feedback before proceeding
      setTimeout(() => {
        nextStep();
      }, 500);
    }
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
      nextStep={nextStep}
      isVerified={isVerified}
    />
  );
}
