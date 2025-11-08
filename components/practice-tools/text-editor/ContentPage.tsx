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
        onChangeText={(inputText) => setBlockText(item.index, inputText)}
        onFocus={handleFocus}
        placeholder={item.placeholder}
      />
    </View>
  );
}

const ContentPage = () => {
  const { contentBlocks, setSelectedBlockIndex } = useTextEditorStore();

  const blocksWithIndex = contentBlocks.map((block, index) => ({
    ...block,
    index,
  }));

  const bottomAlignedBlocks = blocksWithIndex.filter(
    (block) => block.blockStyle?.alignSelf === "flex-end"
  );
  const regularBlocks = blocksWithIndex.filter(
    (block) => block.blockStyle?.alignSelf !== "flex-end"
  );

  const renderBlock = (item: any) => {
    switch (item.type) {
      case "text":
        return <TextBlock item={item} />;
      case "textInput":
        return (
          <TextInputBlock
            item={item}
            handleFocus={() => setSelectedBlockIndex(item.index)}
          />
        );
      default:
        return null;
    }
  };

  const hasBottomAlignedBlocks = bottomAlignedBlocks.length > 0;

  return (
    <View style={styles.contentPage}>
      <View
        style={[
          styles.contentBlocksList,
          hasBottomAlignedBlocks && styles.contentBlocksListWithBottom,
        ]}
      >
        <View>
          {regularBlocks.map((item) => (
            <View key={item.index}>{renderBlock(item)}</View>
          ))}
        </View>
        {hasBottomAlignedBlocks && (
          <View style={styles.bottomBlocksContainer}>
            {bottomAlignedBlocks.map((item) => (
              <View key={item.index}>{renderBlock(item)}</View>
            ))}
          </View>
        )}
      </View>
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
