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
    <View style={styles.view}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={require("@/assets/images/8jxkmv5m_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const TopBar = () => {
  return (
    <View style={styles.row}>
      <BackButton />
      <ProgressBar />
    </View>
  );
};

const QuestionBox = ({ question }: { question: string }) => {
  return (
    <View style={styles.view5}>
      <Text style={styles.text}>{question}</Text>
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
        styles.buttonRow,
        disabled ? { opacity: 0.5, backgroundColor: "#989898" } : {},
      ]}
      onPress={isVerified ? nextStep : verifyAnswer}
      disabled={disabled}
    >
      <Text style={styles.text3}>{isVerified ? "Suivant" : "Vérifier"}</Text>
      <Image
        source={require("@/assets/images/tsy13i8h_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image3}
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
        <View style={styles.view4}>
          <View style={styles.column2}>
            <QuestionBox question={question} />
            <View style={styles.mascotImage}>
              <CustomAnimation
                animationData={require("@/assets/animations/MascotteQuiz.json")}
              />
            </View>
            {/* <MascotInquisitive /> */}
            <AnswersBox
              answers={answers}
              selectAnswer={selectAnswer}
              selectedAnswerIndex={selectedAnswerIndex}
              isVerified={isVerified}
            />
          </View>
        </View>
        <View style={styles.view6}>
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
    borderWidth: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    borderWidth: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 32,
  },
  progressBar: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
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
  button2: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 256,
  },
  buttonRow: {
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 458,
  },

  column2: {
    paddingHorizontal: 8,
  },
  column3: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 16,
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 32,
  },
  mascotImage: {
    width: 257,
    height: 304,
    marginBottom: 7,
  },
  image3: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    width: 496,
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
  view: {
    width: 62,
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
  },
  progressBarContainer: {
    width: 506,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 28,
    paddingHorizontal: 8,
  },
  progressBarOutline: {
    backgroundColor: "#989898",
    borderRadius: 4,
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingVertical: 80,
    marginBottom: 8,
    marginHorizontal: 32,
  },
  view5: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 15,
    paddingLeft: 16,
    paddingRight: 72,
    marginBottom: 8,
  },
  view6: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    marginHorizontal: 32,
  },
});
