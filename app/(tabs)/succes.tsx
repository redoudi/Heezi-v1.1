import WatermarkAbsolute from "@/components/ui/watermark";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

function SuccessIcon() {
  return (
    <Image
      source={require("@/assets/images/successIcon.png")}
      resizeMode={"contain"}
      style={styles.image}
    />
  );
}

export default function SuccessScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.column2}>
            <View style={styles.view2}>
              <Text style={styles.text}>{"0/6 succès débloqués (0%)"}</Text>
            </View>
            <View style={styles.view3}>
              <View style={styles.box}></View>
            </View>
          </View>
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.row}>
              <SuccessIcon />
              <View style={styles.column3}>
                <Text style={styles.text2}>{`Succès ${index + 1}`}</Text>
                <Text style={styles.text3}>{"..."}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <WatermarkAbsolute text="BIENTÔT DISPONIBLE" />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  box: {
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 120,
    marginTop: 32,
    marginHorizontal: 32,
  },
  column2: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 18,
    marginBottom: 16,
  },
  column3: {
    width: 489,
  },
  image: {
    borderRadius: 8,
    width: 85,
    height: 85,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3D3D3D",
    marginBottom: 8,
  },
  text3: {
    fontSize: 10,
    lineHeight: 24,
    color: "#3D3D3D",
  },
  mainContent: {
    width: 1184,
    backgroundColor: "#FFFFFF",
  },
  view2: {
    alignSelf: "flex-start",
    marginBottom: 8,
    marginLeft: 16,
  },
  view3: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
});
