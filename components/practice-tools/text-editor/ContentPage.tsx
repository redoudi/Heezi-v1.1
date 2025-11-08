import useTextEditorStore from "@/store/useTextEditorStore";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

function TextBlock({ item }) {
  return (
    <View style={styles.textBlockContainer}>
      <Text style={[styles.textBlockText, item.style]}>{item.text}</Text>
    </View>
  );
}

function TextInputBlock({
  item,
  setText,
  handleFocus,
}: {
  text: string;
  setText: (text: string) => void;
  handleFocus: () => void;
  contentBlockStyle: { [key: string]: any };
  placeholder: string;
}) {
  const { setBlockText, setSelectedBlockId: setSelectedBlockIndex } =
    useTextEditorStore();
  return (
    <View style={[styles.textInputContainer, item.blockStyle]}>
      <TextInput
        style={[styles.textInput, item.style]}
        value={item.text}
        onChangeText={(inputText) => setBlockText(item.id, inputText)}
        onFocus={handleFocus}
        placeholder={item.placeholder}
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
              return <TextBlock item={item} />;
            case "textInput":
              return (
                <TextInputBlock
                  item={item}
                  handleFocus={() => setSelectedBlockIndex(index)}
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
    borderWidth: 3,
    borderColor: "blue",
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
