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
  const headerRowRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  useEffect(() => {
    if (setContentRef) {
      setContentRef("headerRow", headerRowRef);
    }
  }, [setContentRef]);
  return (
    <View ref={headerRowRef} style={styles.scrollView}>
      <CornerSymbol />
      {columnsLetters.map((columnLetter, index) => (
        <View
          key={columnLetter}
          style={
            index === columnsLetters.length - 1 ? styles.view3 : styles.view2
          }
        >
          <Text style={styles.text9}>{columnLetter}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  view2: {
    width: 106,
    marginRight: 9,
  },
  view3: {
    width: 106,
  },
  text9: {
    color: "#292929",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  image35: {
    width: 24,
    height: 17,
    marginRight: 8,
  },
});
