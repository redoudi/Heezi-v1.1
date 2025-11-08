import useTextEditorStore from "@/store/useTextEditorStore";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

function TextBlock({
  text = "...",
  contentBlockStyle = {},
}: {
  text: string;
  contentBlockStyle: { [key: string]: any };
}) {
  return (
    <View style={styles.textBlockContainer}>
      <Text style={[styles.textBlockText, contentBlockStyle]}>{text}</Text>
    </View>
  );
}

function TextInputBlock({
  text = "",
  setText,
  handleFocus,
  contentBlockStyle = {},
  placeholder = "",
}: {
  text: string;
  setText: (text: string) => void;
  handleFocus: () => void;
  contentBlockStyle: { [key: string]: any };
  placeholder: string;
}) {
  return (
    <View style={[styles.textInputContainer, contentBlockStyle]}>
      <TextInput
        style={[styles.textInput]}
        value={text}
        onChangeText={(inputText) => setText(inputText)}
        onFocus={handleFocus}
        placeholder={placeholder}
      />
    </View>
  );
}

const ContentPage = () => {
  const { contentBlocks, setBlockText, setSelectedBlockIndex } =
    useTextEditorStore();

  return (
    <View style={styles.contentPage}>
      <FlatList
        style={styles.contentBlocksList}
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
                  setText={(inputText) => setBlockText(index, inputText)}
                  handleFocus={() => setSelectedBlockIndex(index)}
                  contentBlockStyle={item.style}
                  placeholder={item.placeholder}
                />
              );
          }
        }}
      />
    </View>
  );
};

export default ContentPage;

const styles = StyleSheet.create({
  contentPage: {
    flex: 1,
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 48,

    marginBottom: 8,
    marginHorizontal: 345,
    borderWidth: 3,
    borderColor: "red",
  },
  contentBlocksList: {
    flex: 1,
  },
  textBlockContainer: {
    alignSelf: "flex-start",
    marginBottom: 11,
    marginHorizontal: 64,
  },
  textBlockText: {
    color: "#292929",
    fontSize: 16,
    width: 618,
  },
  textInputContainer: {
    width: 622,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 11,
    marginBottom: 10,
    marginHorizontal: 64,
  },
  textInput: {
    color: "#292929",
    fontSize: 16,
    marginLeft: 9,
  },
});
