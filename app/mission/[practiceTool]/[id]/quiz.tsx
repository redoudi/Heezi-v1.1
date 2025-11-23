import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import { useLocalSearchParams } from "expo-router";
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
