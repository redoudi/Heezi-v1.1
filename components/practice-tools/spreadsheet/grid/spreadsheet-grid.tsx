import { useMemo } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

// Row configuration
const ROWS = Array.from({ length: 18 }, (_, i) => ({
  id: (i + 1).toString(),
  rowNumber: i + 1,
}));

const CornerSymbol = () => (
  <Image
    source={{
      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/pt024urq_expires_30_days.png",
    }}
    resizeMode={"stretch"}
    style={styles.image35}
  />
);

export default function SpreadsheetGrid() {
  // Header component
  const renderHeader = useMemo(
    () => (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <CornerSymbol />
        {COLUMNS.map((column, index) => (
          <View
            key={column}
            style={index === COLUMNS.length - 1 ? styles.view3 : styles.view2}
          >
            <Text style={styles.text9}>{column}</Text>
          </View>
        ))}
      </ScrollView>
    ),
    []
  );

  // Row component
  const renderRow = ({
    item,
    index,
  }: {
    item: (typeof ROWS)[0];
    index: number;
  }) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.view4}>
          <Text style={styles.text10}>{item.id}</Text>
        </View>
        {COLUMNS.map((_, index) => (
          <View key={`${item.id}-${index}`} style={styles.box}>
            <Text>{String.fromCharCode(65 + index)}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View>
      <View style={styles.column12}>
        {renderHeader}
        <FlatList
          data={ROWS}
          renderItem={renderRow}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 107,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 8,
  },
  column12: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 17,
    marginHorizontal: 8,
  },
  image35: {
    width: 24,
    height: 17,
    marginRight: 8,
  },
  scrollView: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
  },

  text9: {
    color: "#292929",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  text10: {
    color: "#292929",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  view2: {
    width: 106,
    marginRight: 9,
  },
  view3: {
    width: 106,
  },
  view4: {
    width: 4,
    marginRight: 28,
  },
  view5: {
    width: 8,
    marginRight: 24,
  },
  view6: {
    width: 9,
    marginRight: 23,
  },
  view7: {
    width: 7,
    marginRight: 25,
  },
  view8: {
    width: 15,
    marginRight: 17,
  },
  view9: {
    width: 10,
    marginRight: 22,
  },
  view10: {
    width: 14,
    marginRight: 18,
  },
});
