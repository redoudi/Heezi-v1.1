import { Image, StyleSheet, Text, View } from "react-native";

function endLevelStats() {
  return (
    <View style={styles.column3}>
      <View style={styles.row}>
        <Text style={[{ fontSize: 14 }, styles.text3]}>{"+3"}</Text>
        <Image
          source={require("@/assets/images/niw8yegh_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />
      </View>
      <View style={styles.row2}>
        <Text style={[{ fontSize: 14 }, styles.text4]}>{"+500"}</Text>
        <Image
          source={require("@/assets/images/3ixeh7z2_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image2}
        />
      </View>
      <View style={styles.row3}>
        <View style={styles.column4}>
          <View style={styles.view4}>
            <Text style={[{ fontSize: 10, fontWeight: "bold" }, styles.text5]}>
              {"Nv.1"}
            </Text>
          </View>
          <View style={styles.view5}>
            <View style={styles.box2}></View>
          </View>
        </View>
        <Text style={[{ fontSize: 10, fontWeight: "bold" }, styles.text6]}>
          {"+100xp"}
        </Text>
      </View>
    </View>
  );
}

export function EndLevelReport({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.reportTitle}>{title}</Text>
      <Text style={[styles.text2]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "stretch",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  column3: {
    alignSelf: "flex-start",
  },
  column4: {
    width: 441,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    marginRight: 8,
  },
  reportTitle: {
    fontSize: 24,
    color: "#292929",
    marginBottom: 8,
  },
  image: {
    borderRadius: 8,
    width: 24,
    height: 19,
    marginRight: 446,
  },
  image2: {
    borderRadius: 8,
    width: 20,
    height: 20,
    marginRight: 425,
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  row2: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#292929",
    marginBottom: 8,
  },
  text2: {
    color: "#292929",
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 24,
  },
  text3: {
    color: "#F95F3C",
    marginLeft: 4,
    marginRight: 8,
  },
  text4: {
    color: "#F28B0E",
    marginLeft: 4,
    marginRight: 8,
  },
  text5: {
    color: "#1D1D1D",
  },
  text6: {
    color: "#292929",
  },
  view4: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 4,
    marginRight: 406,
  },
  view5: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginRight: 8,
  },
  box2: {
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
});
