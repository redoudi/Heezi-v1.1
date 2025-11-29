import CustomAnimation from "@/components/animations/CustomAnimation";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
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

  let buttonStyle = {};
  if (isWrongAnswer) {
    buttonStyle = styles.buttonWrong;
  } else if (isCorrectAnswer) {
    buttonStyle = styles.buttonCorrect;
  } else if (isSelected) {
    buttonStyle = styles.buttonSelected;
  }

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={() => selectAnswer(index)}
      disabled={isVerified}
    >
      <Text style={styles.answerText}>{answer.text || "..."}</Text>
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

const AnswersBox_ = ({
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
      contentContainerStyle={styles.answersContainer}
    />
  );
};

function AnswersBox({
  answers,
  selectAnswer,
  selectedAnswerIndex,
  isVerified,
}: {
  answers: { text: string; isCorrect?: boolean }[];
  selectAnswer: (index: number) => void;
  selectedAnswerIndex: number | null;
  isVerified: boolean;
}) {
  return (
    <View style={styles.answersContainer}>
      {answers.map((answer, index) => (
        <AnswerButton
          key={index}
          answer={answer}
          selectAnswer={selectAnswer}
          index={index}
          selectedAnswerIndex={selectedAnswerIndex}
          isVerified={isVerified}
        />
      ))}
    </View>
  );
}

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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.mainContent}
      >
        <TopBar />
        <View style={styles.questionAndAnswersContainer}>
          <QuestionBox question={question} />

          <View style={styles.mascotContainer}>
            <CustomAnimation
              animationData={require("@/assets/animations/MascotteQuiz.json")}
            />
          </View>

          <AnswersBox
            answers={answers}
            selectAnswer={selectAnswer}
            selectedAnswerIndex={selectedAnswerIndex}
            isVerified={isVerified}
          />
        </View>
        <VerifyButton
          verifyAnswer={verifyAnswer}
          nextStep={nextStep}
          isVerified={isVerified}
          disabled={disabled}
          selectedAnswerIndex={selectedAnswerIndex}
          answers={answers}
        />
      </ScrollView>
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
    padding: 16,
    gap: 16,
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
    padding: 8,
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  progressBar: {
    width: "30%",
    height: 8,
    backgroundColor: "#45BC9E",
  },
  questionContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
  answersAndVerifyContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonSelected: {
    backgroundColor: "#45BC9E",
  },
  buttonWrong: {
    backgroundColor: "#FF6B6B",
  },
  buttonCorrect: {
    borderWidth: 8,
    borderColor: "#4ECB71",
    backgroundColor: "rgba(78, 203, 113, 0.2)",
  },
  verifyButton: {
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-end",
  },

  mascotContainer: {
    alignSelf: "flex-start",
  },
  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  answersContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 16,
  },
  answerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    textAlign: "center",
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
  questionAndAnswersContainer: { gap: 16 },
});
