import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../spreadsheet-styles";

const CornerSymbol = () => (
  <Image
    source={require("@/assets/images/pt024urq_expires_30_days.png")}
    resizeMode={"stretch"}
    style={styles.image35}
  />
);

export default function HeaderRow({ columnsLetters }: { COLUMNS: string[] }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
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
    </ScrollView>
  );
}
