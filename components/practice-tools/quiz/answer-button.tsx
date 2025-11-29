import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export const AnswerButton = ({
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

export const VerifyButton = ({
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

const styles = StyleSheet.create({
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
    borderWidth: 4,
    borderColor: "black",
    backgroundColor: "#45BC9E",
  },
  verifyButton: {
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-end",
  },
  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 24,
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
});
