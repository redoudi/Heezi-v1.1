import QuizBody from "@/components/practice-tools/quiz/quiz-body";
import useLevelData from "@/hooks/use-level-data";
import useCompletedLevelsStore from "@/store/useCompletedLevels";
import arrayGenerator from "@/utils/arrayGenerator";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export const dynamicParams = false;

export default function QuizScreen() {
  const { tasks, levelNumber } = useLevelData();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isVerified, setIsVerified] = useState(false);
  const { practiceTool, id } = useLocalSearchParams();
  const { setLevelCompleted } = useCompletedLevelsStore();

  const verifyAnswer = () => {
    if (selectedAnswerIndex === null) return;
    setIsVerified(true);
    const selectedAnswer = currentStep.answers[selectedAnswerIndex];
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

  const nextStep = () => {
    const nextStepYield = stepGeneratorRef.current.next();
    if (nextStepYield.done) {
      setLevelCompleted(levelNumber, practiceTool);
      router.push(`/mission/${practiceTool}/${id}/result`);
    } else {
      setSelectedAnswerIndex(null);
      setIsVerified(false);
      setCurrentStep(nextStepYield.value);
    }
  };

  useEffect(() => {
    if (tasks?.length && id && practiceTool) {
      stepGeneratorRef.current = arrayGenerator(tasks[0].steps);
      nextStep();
    }
  }, [tasks]);

  return (
    <QuizBody
      currentStep={currentStep}
      selectAnswer={(index: number) => setSelectedAnswerIndex(index)}
      selectedAnswerIndex={selectedAnswerIndex}
      verifyAnswer={verifyAnswer}
      nextStep={nextStep}
      isVerified={isVerified}
    />
  );
}
