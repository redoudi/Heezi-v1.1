import MascotteQuiz from "@/components/animations/MascotteQuiz";
import MascotModal from "@/components/mascot/mascot-modal";
import { router } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProgressBar = () => {
  return (
    <View style={styles.view2}>
      <View style={styles.view3}>
        <View style={styles.box}></View>
      </View>
    </View>
  );
};

const TopBar = () => {
  return (
    <View style={styles.row}>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("@/assets/images/8jxkmv5m_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
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
      style={buttonStyle}
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
}: {
  verifyAnswer: () => void;
  nextStep: () => void;
  isVerified: boolean;
  disabled: boolean;
}) => {
  return (
    <TouchableOpacity
      style={styles.buttonRow}
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
  question,
  answers,
  modalText,
  closeModal,
  selectedAnswerIndex,
  verifyAnswer,
  nextStep,
  isVerified,
}: {
  selectAnswer: (index: number) => void;
  modalText: string;
  question: string;
  answers: { text: string; isCorrect?: boolean }[];
  closeModal: () => void;
  selectedAnswerIndex: number | null;
  verifyAnswer: () => void;
  nextStep: () => void;
  isVerified: boolean;
}) {
  useEffect(() => {
    console.log("selectedAnswerIndex", selectedAnswerIndex);
  }, [selectedAnswerIndex]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <TopBar />
        <View style={styles.view4}>
          <View style={styles.column2}>
            <QuestionBox question={question} />
            <MascotteQuiz style={styles.mascotImage} />
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
            disabled={selectedAnswerIndex === -1}
          />
        </View>
        <MascotModal
          open={!!modalText?.trim()}
          onClose={closeModal}
          modalText={modalText}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  box: {
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
  column: {
    width: 1440,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 32,
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
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    width: 496,
  },
  text2: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
  text3: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  view: {
    width: 62,
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
  },
  view2: {
    width: 506,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 28,
    paddingHorizontal: 8,
  },
  view3: {
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
