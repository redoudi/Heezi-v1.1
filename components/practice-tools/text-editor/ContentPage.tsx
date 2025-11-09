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

function ContentItem({ item, index }: { item: any; index: number }) {
  const { setSelectedBlockIndex } = useTextEditorStore();
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
    case "view":
      return (
        <View key={index} style={item.style}>
          {item.children.map((child: any, index: number) => (
            <ContentItem key={index} item={child} index={index} />
          ))}
        </View>
      );
  }
}

const ContentPage = () => {
  const { contentBlocks } = useTextEditorStore();

  return (
    <View style={styles.contentPage}>
      {contentBlocks.map((item, index) => (
        <ContentItem key={index} item={item} index={index} />
      ))}
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
    paddingHorizontal: 64,
  },
  textBlockContainer: {
    alignSelf: "flex-start",
    marginBottom: 11,
    // marginHorizontal: 64,
  },
  textBlockText: {
    color: "#292929",
    fontSize: 16,
    textAlignVertical: "center",
  },
  textInputContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 11,
    marginBottom: 10,
    // marginHorizontal: 64,
  },
  textInput: {
    color: "#292929",
    fontSize: 16,
    marginLeft: 9,
  },
});
