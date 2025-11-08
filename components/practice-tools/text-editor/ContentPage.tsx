import useTextEditorStore from "@/store/useTextEditorStore";
import { StyleSheet, Text, TextInput, View } from "react-native";

function TextBlock({ item }: { item: any }) {
  return (
    <View style={[styles.textBlockContainer, item.blockStyle]}>
      <Text style={[styles.textBlockText, item.style]}>{item.text}</Text>
    </View>
  );
}

function TextInputBlock({
  item,
  handleFocus,
}: {
  item: any;
  handleFocus: () => void;
}) {
  const { setBlockText } = useTextEditorStore();
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
  const { contentBlocks, setSelectedBlockIndex } = useTextEditorStore();

  const renderBlock = (item: any) => {};

  return (
    <View style={styles.contentPage}>
      {contentBlocks.map((item, index) => {
        switch (item.type) {
          case "text":
            return <TextBlock key={index} item={item} />;
          case "textInput":
            return (
              <TextInputBlock
                key={index}
                item={item}
                handleFocus={() => setSelectedBlockIndex(index)}
              />
            );
          default:
            return null;
        }
      })}
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
  },
  contentBlocksList: {
    flex: 1,
  },
  contentBlocksListWithBottom: {
    justifyContent: "space-between",
  },
  bottomBlocksContainer: {
    alignSelf: "stretch",
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
