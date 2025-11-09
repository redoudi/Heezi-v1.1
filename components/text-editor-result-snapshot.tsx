import useTextEditorStore from "@/store/useTextEditorStore";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

type TextEditorBlock = {
  type?: string;
  text?: string;
  style?: Record<string, unknown>;
  blockStyle?: Record<string, unknown>;
  children?: TextEditorBlock[];
};

export default function TextEditorResultSnapshot() {
  const { contentBlocks } = useTextEditorStore();

  const renderText = (block: TextEditorBlock, index: number) => (
    <View key={index} style={[block.blockStyle]}>
      <Text key={index} style={[styles.text, block.style]}>
        {block.text}
      </Text>
    </View>
  );
  const renderContentBlocksRecursive = (
    blocks: TextEditorBlock[] | undefined
  ) => {
    if (!blocks?.length) {
      return null;
    }

    return blocks.map((block, index: number) => {
      switch (block.type) {
        case "textInput":
          return renderText(block, index);
        case "text":
          return renderText(block, index);
        case "view":
          return (
            <View key={index} style={block.style}>
              {renderContentBlocksRecursive(block.children)}
            </View>
          );
        default:
          return null;
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.snapshotBox}>
        {renderContentBlocksRecursive(contentBlocks)}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "flex-start",
  },
  snapshotBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 32,
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
  },
  text: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
});
