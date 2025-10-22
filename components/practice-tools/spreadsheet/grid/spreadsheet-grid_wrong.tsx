import { useMemo } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "../titlebar";

// Column headers data
const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

// Row configuration
const ROWS = Array.from({ length: 18 }, (_, i) => ({
  id: (i + 1).toString(),
  rowNumber: i + 1,
}));

// Cell pattern: box, box, box, box2, box, box, box, box2, box, box, box2, box, box, box3
const CELL_STYLES = [
  styles.box,
  styles.box,
  styles.box,
  styles.box2,
  styles.box,
  styles.box,
  styles.box2,
  styles.box,
  styles.box,
  styles.box2,
  styles.box,
  styles.box,
  styles.box3,
];

// Helper function to get row number style
const getRowNumberStyle = (rowNumber: number) => {
  switch (rowNumber) {
    case 1:
      return styles.view4;
    case 2:
    case 3:
    case 5:
    case 6:
    case 8:
    case 9:
      return styles.view5;
    case 4:
      return styles.view6;
    case 7:
      return styles.view7;
    case 10:
    case 14:
      return styles.view8;
    case 11:
      return styles.view9;
    default:
      return styles.view10;
  }
};

export default function SpreadsheetGridWrong() {
  // Header component
  const renderHeader = useMemo(
    () => (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/pt024urq_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image35}
        />
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
    const isLastRow = index === ROWS.length - 1;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={isLastRow ? styles.scrollView2 : styles.scrollView}
      >
        <View style={getRowNumberStyle(item.rowNumber)}>
          <Text style={styles.text10}>{item.id}</Text>
        </View>
        {CELL_STYLES.map((cellStyle, cellIndex) => (
          <View key={`${item.id}-${cellIndex}`} style={cellStyle}></View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.column12}>
      {renderHeader}
      <FlatList
        data={ROWS}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
