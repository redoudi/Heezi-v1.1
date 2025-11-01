import useTextEditorStore from "@/store/useTextEditorStore";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TextEditorHeader from "./TextEditorHeader";

function TextBlock({ text = "...", contentBlockStyle = {} }) {
  return (
    <View style={styles.view3}>
      <Text style={[styles.text12, contentBlockStyle]}>{text}</Text>
    </View>
  );
}

function TextInputBlock({
  setText,
  handleFocus,
  contentBlockStyle = {},
  index,
}: {
  setText: (text: string) => void;
  handleFocus: () => void;
  contentBlockStyle: { [key: string]: any };
  index: number;
}) {
  const { getBlockText, setBlockText, contentBlocks } = useTextEditorStore();

  console.log("text", contentBlocks[index]?.text);
  return (
    <View style={styles.view2}>
      <TextInput
        style={[styles.text11, contentBlockStyle]}
        value={contentBlocks[index]?.text}
        onChangeText={(text) => setBlockText(index, text)}
        onFocus={handleFocus}
      />
    </View>
  );
}

function PageNumber({ currentPage = 1, totalPages = 1 }) {
  return (
    <View style={styles.view5}>
      <Text style={styles.text13}>{`Page ${currentPage}/${totalPages}`}</Text>
    </View>
  );
}

const ContentBlockList = () => {
  const { contentBlocks, setBlockText, setSelectedBlockIndex } =
    useTextEditorStore();
  return (
    <FlatList
      data={contentBlocks}
      renderItem={({ item, index }) => {
        switch (item.type) {
          case "text":
            return (
              <TextBlock text={item.text} contentBlockStyle={item.style} />
            );
          case "textInput":
            return (
              <TextInputBlock
                text={item.text}
                setText={(text) => setBlockText(index, text)}
                handleFocus={() => setSelectedBlockIndex(index)}
                contentBlockStyle={item.style}
                index={index}
              />
            );
        }
      }}
    />
  );
};

export default function TextEditorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <TextEditorHeader />
        <View style={styles.column10}>
          <ContentBlockList />
        </View>
        <PageNumber currentPage={1} totalPages={1} />
        <View style={styles.column11}>
          <View style={styles.row12}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/eqckye85_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image30}
            />
            <TouchableOpacity
              style={styles.button31}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qj1lahyq_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image31}
              />
            </TouchableOpacity>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <View style={styles.box}></View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonRow4}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text14}>{"Envoyer"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/bl1h9t4s_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image32}
            />
          </TouchableOpacity>
        </View>
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
  button31: {
    width: 62,
    alignItems: "center",
    backgroundColor: "#33C6FD",
    borderRadius: 8,
    paddingVertical: 15,
    marginRight: 16,
  },
  buttonRow4: {
    width: 297,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9BE3C",
    borderRadius: 8,
    paddingVertical: 8,
  },
  column: {
    width: 1440,
    backgroundColor: "#EFEFEF",
  },
  column10: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 48,
    paddingBottom: 501,
    marginBottom: 8,
    marginHorizontal: 345,
  },
  column11: {
    alignSelf: "flex-start",
    marginBottom: 32,
    marginLeft: 32,
  },
  image30: {
    width: 87,
    height: 53,
    marginRight: 16,
  },
  image31: {
    borderRadius: 8,
    width: 30,
    height: 22,
  },
  image32: {
    borderRadius: 8,
    width: 16,
    height: 24,
    marginRight: 16,
  },
  row12: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 16,
  },
  text11: {
    color: "#292929",
    fontSize: 16,
    marginLeft: 9,
  },
  text12: {
    color: "#292929",
    fontSize: 16,
    width: 618,
  },
  text13: {
    color: "#292929",
    fontSize: 16,
    fontWeight: "bold",
  },
  text14: {
    color: "#903610",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    flex: 1,
  },
  view2: {
    width: 622,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 11,
    marginBottom: 10,
    marginHorizontal: 64,
  },
  view3: {
    alignSelf: "flex-start",
    marginBottom: 11,
    marginHorizontal: 64,
  },
  view4: {
    width: 622,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 11,
    marginHorizontal: 64,
  },
  view5: {
    alignItems: "center",
    marginBottom: 18,
  },
  view6: {
    width: 116,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 22,
  },
  view7: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
});
