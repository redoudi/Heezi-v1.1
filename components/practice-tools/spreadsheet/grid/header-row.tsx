import { Image, Text, View } from "react-native";
import { styles } from "../spreadsheet-styles";

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
  return (
    <View style={styles.scrollView}>
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
