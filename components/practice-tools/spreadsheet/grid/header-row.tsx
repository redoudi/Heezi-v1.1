import useCursor from "@/context/useCursor";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CornerSymbol = () => (
  <Image
    source={require("@/assets/images/pt024urq_expires_30_days.png")}
    resizeMode={"stretch"}
    style={styles.image35}
  />
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
      style={[styles.mainContainer, isHighlighted && styles.highlighted]}
    >
      <CornerSymbol />
      {columnsLetters.map((columnLetter, index) => (
        <View
          key={columnLetter}
          style={
            index === columnsLetters.length - 1
              ? styles.letterContainer
              : styles.lastLetterContainer
          }
        >
          <Text style={styles.letterText}>{columnLetter}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  lastLetterContainer: {
    width: 106,
    marginRight: 9,
  },
  letterContainer: {
    width: 106,
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
});
