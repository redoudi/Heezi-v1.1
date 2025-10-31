import MascotModal from "@/components/mascot/mascot-modal";
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
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/8jxkmv5m_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
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

const MascotInquisitive = () => {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/d7skkhjc_expires_30_days.png",
      }}
      resizeMode={"stretch"}
      style={styles.image2}
    />
  );
};

const AnswerButton = ({
  answer,
  selectAnswer,
  index,
  selectedAnswerIndex,
}: {
  answer: { text: string; isCorrect: boolean };
  selectAnswer: (index: number) => void;
  index: number;
}) => {
  return (
    <TouchableOpacity
      style={
        selectedAnswerIndex === index ? styles.buttonSelected : styles.button
      }
      onPress={() => selectAnswer(index)}
    >
      <Text style={styles.text2}>{answer.text || "..."}</Text>
    </TouchableOpacity>
  );
};

const AnswersBox = ({
  answers,
  selectAnswer,
  selectedAnswerIndex,
}: {
  answers: { text: string; isCorrect: boolean }[];
  selectAnswer: (index: number) => void;
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
}: {
  selectAnswer: (index: number) => void;
  modalText: string;
  question: string;
  answers: string[];
  closeModal: () => void;
  selectedAnswerIndex: number | null;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <TopBar />
        <View style={styles.view4}>
          <View style={styles.column2}>
            <QuestionBox question={question} />
            <MascotInquisitive />
            <AnswersBox
              answers={answers}
              selectAnswer={selectAnswer}
              selectedAnswerIndex={selectedAnswerIndex}
            />
          </View>
        </View>
        <View style={styles.view6}>
          <TouchableOpacity
            style={styles.buttonRow}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text3}>{"Vérifier"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/tsy13i8h_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
          </TouchableOpacity>
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
    alignItems: "flex-start",
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
  image2: {
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
