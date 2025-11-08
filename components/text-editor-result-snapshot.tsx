import useTextEditorStore from "@/store/useTextEditorStore";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function SpreadsheetResultSnapshot() {
  const { contentBlocks } = useTextEditorStore();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.snapshotBox}>
        {contentBlocks.map((block, index) => (
          <View key={index} style={[block.blockStyle]}>
            <Text key={index} style={[styles.text, block.style]}>
              {block.text || block.placeholder}
            </Text>
          </View>
        ))}
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
