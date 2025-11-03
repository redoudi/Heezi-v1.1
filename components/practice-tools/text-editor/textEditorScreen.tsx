import useTextEditorStore from "@/store/useTextEditorStore";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
  text = "",
  setText,
  handleFocus,
  contentBlockStyle = {},
}: {
  text: string;
  setText: (text: string) => void;
  handleFocus: () => void;
  contentBlockStyle: { [key: string]: any };
}) {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={[styles.textInput, contentBlockStyle]}
        value={text}
        onChangeText={(text) => setText(text)}
        onFocus={handleFocus}
      />
    </View>
  );
}

function PageNumber({ currentPage = 1, totalPages = 1 }) {
  return (
    <View style={styles.pageNumberContainer}>
      <Text
        style={styles.pageNumberText}
      >{`Page ${currentPage}/${totalPages}`}</Text>
    </View>
  );
}

const ContentPage = () => {
  const { contentBlocks, setBlockText, setSelectedBlockIndex } =
    useTextEditorStore();
  return (
    <View style={styles.contentPage}>
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
                />
              );
          }
        }}
      />
    </View>
  );
};

function ProgressBar() {
  return (
    <View style={styles.progressBarContainer1}>
      <View style={styles.progressBarContainer2}>
        <View style={styles.progressBar}></View>
      </View>
    </View>
  );
}

export default function TextEditorScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.column}>
        <TextEditorHeader />

        <ContentPage />

        <PageNumber currentPage={1} totalPages={1} />
        <View style={styles.progressBarColumn}>
          <View style={styles.ProgressBarRow}>
            <ProgressBar />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  progressBar: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
  },

  column: {
    width: 1440,
    backgroundColor: "#EFEFEF",
  },
  contentPage: {
    flex: 1,
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 48,
    paddingBottom: 501,
    marginBottom: 8,
    marginHorizontal: 345,
  },
  progressBarColumn: {
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
  ProgressBarRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 16,
  },
  textInput: {
    color: "#292929",
    fontSize: 16,
    marginLeft: 9,
  },
  text12: {
    color: "#292929",
    fontSize: 16,
    width: 618,
  },
  pageNumberText: {
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
  textInputContainer: {
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
  pageNumberContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  progressBarContainer1: {
    width: 116,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 22,
  },
  progressBarContainer2: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
});
