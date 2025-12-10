import useCursor from "@/context/useCursor";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CornerSymbol = () => (
  <View style={styles.rowNumberContainer}>
    <Image
      source={require("@/assets/images/pt024urq_expires_30_days.png")}
      resizeMode={"stretch"}
      style={styles.image35}
    />
  </View>
);

export default function HeaderRow({
  columnsLetters,
}: {
  columnsLetters: string[];
}) {
  const elementId = "headerRow";
  const headerRowRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  useEffect(() => {
    if (setContentRef) {
      setContentRef(elementId, headerRowRef);
    }
  }, [setContentRef]);
  const {
    currentStep: { highlight },
  } = useCursor();

  const isHighlighted = highlight?.elementId === elementId;
  return (
    <View
      ref={headerRowRef}
      style={[styles.cellsRow, isHighlighted && styles.highlighted]}
    >
      <CornerSymbol />
      <View style={styles.lettersContainer}>
        {columnsLetters.map((columnLetter, index) => (
          <View key={columnLetter} style={styles.letterContainer}>
            <View style={styles.letterTextContainer}>
              <Text style={styles.letterText}>{columnLetter}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  lettersContainer: {
    flexDirection: "row",
    gap: 8,
  },
  lastLetterContainer: {
    marginRight: 9,
  },
  letterContainer: {
    width: 107,
    paddingHorizontal: 8,
  },
  letterText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#292929",
    textAlign: "center",
  },
  image35: {
    width: 24,
    height: 17,
    marginRight: 8,
  },
  highlighted: {
    borderColor: "red",
    borderWidth: 6,
    borderStyle: "dotted",
  },
  cellsRow: {
    flexDirection: "row",
    paddingHorizontal: 8,
    gap: 8,
    marginLeft: 8,
  },
  rowNumberContainer: {
    width: 28,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 8,
  },
  letterTextContainer: {
    marginHorizontal: "auto",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
