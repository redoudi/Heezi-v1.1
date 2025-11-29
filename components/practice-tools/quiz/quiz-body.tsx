import CustomAnimation from "@/components/animations/CustomAnimation";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProgressBar = () => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarOutline}>
        <View style={styles.progressBar}></View>
      </View>
    </View>
  );
};

function BackButton() {
  return (
    <TouchableOpacity
      style={styles.backButtonBox}
      onPress={() => router.back()}
    >
      <Image
        source={require("@/assets/images/8jxkmv5m_expires_30_days.png")}
        resizeMode={"contain"}
        style={styles.backButtonIcon}
      />
    </TouchableOpacity>
  );
}

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <BackButton />
      <ProgressBar />
    </View>
  );
};

const QuestionBox = ({ question }: { question: string }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
};

const AnswerButton = ({
  answer,
  selectAnswer,
  index,
  selectedAnswerIndex,
  isVerified,
}: {
  answer: { text: string; isCorrect?: boolean };
  selectAnswer: (index: number) => void;
  index: number;
  selectedAnswerIndex: number | null;
  isVerified: boolean;
}) => {
  const isSelected = selectedAnswerIndex === index;
  const isWrongAnswer = isVerified && isSelected && !answer.isCorrect;
  const isCorrectAnswer = isVerified && answer.isCorrect;

  let buttonStyle = styles.button;
  if (isWrongAnswer) {
    buttonStyle = styles.buttonWrong;
  } else if (isCorrectAnswer) {
    buttonStyle = styles.buttonCorrect;
  } else if (isSelected) {
    buttonStyle = styles.buttonSelected;
  }

  return (
    <TouchableOpacity
      style={[buttonStyle]}
      onPress={() => selectAnswer(index)}
      disabled={isVerified}
    >
      <Text style={styles.text2}>{answer.text || "..."}</Text>
    </TouchableOpacity>
  );
};

const VerifyButton = ({
  verifyAnswer,
  nextStep,
  isVerified,
  disabled,
  selectedAnswerIndex,
  answers,
}: {
  verifyAnswer: () => void;
  nextStep: () => void;
  isVerified: boolean;
  disabled: boolean;
  selectedAnswerIndex: number | null;
  answers: { text: string; isCorrect?: boolean }[];
}) => {
  // Check if the selected answer is correct
  const isCorrectAnswer =
    selectedAnswerIndex !== null &&
    answers[selectedAnswerIndex]?.isCorrect === true;

  // Hide button if answer is correct and verified (auto-advancing)
  if (isVerified && isCorrectAnswer) {
    return null;
  }

  return (
    <TouchableOpacity
      style={[
        styles.verifyButton,
        disabled ? { opacity: 0.5, backgroundColor: "#989898" } : {},
      ]}
      onPress={isVerified ? nextStep : verifyAnswer}
      disabled={disabled}
    >
      <Text style={styles.text3}>{isVerified ? "Suivant" : "Vérifier"}</Text>
      <Image
        source={require("@/assets/images/tsy13i8h_expires_30_days.png")}
        resizeMode={"contain"}
        style={styles.triangleIcon}
      />
    </TouchableOpacity>
  );
};

const AnswersBox = ({
  answers,
  selectAnswer,
  selectedAnswerIndex,
  isVerified,
}: {
  answers: { text: string; isCorrect?: boolean }[];
  selectAnswer: (index: number) => void;
  selectedAnswerIndex: number | null;
  isVerified: boolean;
}) => {
  return (
    <FlatList
      data={answers}
      renderItem={({ item, index }) => (
        <AnswerButton
          answer={item}
          selectAnswer={selectAnswer}
          index={index}
          selectedAnswerIndex={selectedAnswerIndex}
          isVerified={isVerified}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.column3}
    />
  );
};

export default function QuizBody({
  selectAnswer,
  currentStep,
  selectedAnswerIndex,
  verifyAnswer,
  nextStep,
  isVerified,
}: {
  selectAnswer: (index: number) => void;
  currentStep: {
    question: string;
    answers: { text: string; isCorrect?: boolean }[];
  };
  selectedAnswerIndex: number | null;
  verifyAnswer: () => void;
  nextStep: () => void;
  isVerified: boolean;
}) {
  const { question, answers } = currentStep;
  const disabled = selectedAnswerIndex === null;
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.mainContainer, { height: height || "100%" }]}>
      <View style={styles.mainContent}>
        <TopBar />
        <QuestionBox question={question} />
        <View style={styles.mascotContainer}>
          <CustomAnimation
            animationData={require("@/assets/animations/MascotteQuiz.json")}
          />
        </View>
        <View style={styles.answersAndVerifyContainer}>
          <AnswersBox
            answers={answers}
            selectAnswer={selectAnswer}
            selectedAnswerIndex={selectedAnswerIndex}
            isVerified={isVerified}
          />
          <VerifyButton
            verifyAnswer={verifyAnswer}
            nextStep={nextStep}
            isVerified={isVerified}
            disabled={disabled}
            selectedAnswerIndex={selectedAnswerIndex}
            answers={answers}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    padding: 16,
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  progressBar: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
  },
  questionContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
  answersAndVerifyContainer: {
    alignSelf: "flex-end",
    gap: 16,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 256,
    marginBottom: 16,
  },
  buttonSelected: {
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 256,
    marginBottom: 16,
  },
  buttonWrong: {
    backgroundColor: "#FF6B6B",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 256,
    marginBottom: 16,
  },
  buttonCorrect: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 256,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#4ECB71",
  },
  verifyButton: {
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-end",
  },

  column3: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 16,
  },
  mascotContainer: {
    height: 304,
  },
  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },

  text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
  text3: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginRight: 10,
  },
  backButtonBox: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
  },
  backButtonIcon: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  progressBarContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  progressBarOutline: {
    backgroundColor: "#989898",
    borderRadius: 4,
  },
});
