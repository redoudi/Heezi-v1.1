import useLevelData from "@/hooks/use-level-data";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DownArrow = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <TouchableOpacity onPress={nextStep}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ojvjgq96_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={styles.image31}
      />
    </TouchableOpacity>
  );
};

const CornerTriangle = () => {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/662flub1_expires_30_days.png",
      }}
      resizeMode={"stretch"}
      style={styles.cornerTriangle}
    />
  );
};

const Mascot = () => {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/tfupuxd4_expires_30_days.png",
      }}
      resizeMode={"contain"}
      style={styles.mascot}
    />
  );
};

export default function MascotBubble({
  bubbleText,
  nextStep,
}: {
  bubbleText: string;
  nextStep: () => void;
}) {
  const { levelType } = useLevelData();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainRow}>
        <View style={styles.textBoxContainer}>
          <View style={styles.textBox}>
            <View style={styles.textContainer}>
              <Text style={styles.dialogText}>{bubbleText || "..."}</Text>
              {levelType === "lesson" && <DownArrow nextStep={nextStep} />}
            </View>
          </View>
          <CornerTriangle />
        </View>
        <Mascot />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 0,
    zIndex: 1000,
  },
  mainRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 0,
  },
  textBox: {
    width: 782,
  },
  column9: {
    marginRight: 0,
  },
  textContainer: {
    backgroundColor: "#525252",
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingTop: 19,
    paddingBottom: 15,
    paddingLeft: 32,
    paddingRight: 33,
  },
  image31: {
    width: 32,
    height: 21,
  },
  cornerTriangle: {
    width: 42,
    height: 61,
    alignSelf: "flex-start",
  },
  mascot: {
    width: 150,
    height: 150,
  },

  dialogText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 31,
  },
  view38: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});
