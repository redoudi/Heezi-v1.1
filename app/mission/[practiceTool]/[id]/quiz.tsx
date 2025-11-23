import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export const dynamicParams = false;

export default function QuizScreen() {
  const [question, setQuestion] = useState("...?");
  const [answers, setAnswers] = useState<
    { text: string; isCorrect?: boolean }[]
  >([]);
  const [modalText, setModalText] = useState("");
  const { practiceTool, id } = useLocalSearchParams();
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
      const currentTask = tasks?.at(runnerRef.current.task);
      const introText = currentTask?.intro;
      if (introText && introText.trim() !== "") setModalText(introText);
    }
  };

  const verifyAnswer = () => {
    if (selectedAnswerIndex === null) return;
    setIsVerified(true);
    const selectedAnswer = answers[selectedAnswerIndex];
    if (selectedAnswer?.isCorrect) {
      setTimeout(() => {
        nextStep();
      }, 500);
    }
  };

  useEffect(() => {
    if (tasks?.length) {
      setTaskIndex(0);
      setStepIndex(0);
    }
  }, [tasks]);

  //*/************** */

  const [currentStep, setCurrentStep] = useState<any>({
    question: "",
    answers: [],
  });
  const stepGeneratorRef = useRef<any>(null);

  function* arrayGenerator(arr: any[]) {
    for (const item of arr) {
      yield item;
    }
  }

  const nextStep = () => {
    setCurrentStep(stepGeneratorRef.current.next().value);
  };

  useEffect(() => {
    if (tasks?.length) {
      stepGeneratorRef.current = arrayGenerator(tasks[0].steps);
      nextStep();
    }
  }, [tasks]);

  return (
    <QuizBody
      currentStep={currentStep}
      selectAnswer={selectAnswer}
      selectedAnswerIndex={selectedAnswerIndex}
      verifyAnswer={verifyAnswer}
      nextStep={nextStep}
      isVerified={isVerified}
    />
  );
}
