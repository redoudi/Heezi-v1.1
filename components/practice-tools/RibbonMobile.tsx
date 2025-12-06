import VerticalDivider from "@/components/practice-tools/VerticalDivider";
import BoldButton from "@/components/practice-tools/spreadsheet/BoldButton";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PoliceButtons() {
  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.police} onPress={() => {}} disabled>
          <Text style={styles.text4}>{"Police"}</Text>
          <Image
            source={require("@/assets/images/downArrow.png")}
            resizeMode={"contain"}
            style={styles.image12}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <BoldButton />
        <TouchableOpacity style={styles.button14} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/wbsdd6yd_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image14}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button15} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/shmc35k2_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image15}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ParagraphButtons() {
  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button19} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/nkzp2nt3_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image19}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button19} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/y7bq5psu_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image19}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button20} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/gxdqlt2g_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image19}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button22} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/uirt4emu_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image21}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button20} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/393nlgpw_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image19}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button23} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/e7u96dzs_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image21}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TabButtons() {
  return (
    <View style={styles.grid}>
      <View style={[styles.row, { justifyContent: "flex-start" }]}>
        <TouchableOpacity style={styles.button24} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/h7fhqw57_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image20}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button25} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/lxt8yo0p_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function RibbonMobile() {
  return (
    <View style={styles.mainContainer}>
      <PoliceButtons />
      <VerticalDivider />
      <ParagraphButtons />
      <VerticalDivider />
      <TabButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  grid: { gap: 8, width: "30%", padding: 8 },
  button: { backgroundColor: "#EFEFEF" },
  button14: {
    width: 22,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  button15: {
    width: 24,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 20,
  },
  button19: {
    width: 29,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 4,
  },
  button20: {
    width: 29,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button22: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button23: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 16,
  },
  button24: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button25: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  police: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  image12: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 8,
  },
  image14: {
    borderRadius: 8,
    width: 6,
    height: 10,
  },
  image15: {
    borderRadius: 8,
    width: 8,
    height: 10,
  },
  image19: {
    borderRadius: 8,
    width: 13,
    height: 12,
  },
  image20: {
    borderRadius: 8,
    width: 15,
    height: 12,
  },
  image21: {
    borderRadius: 8,
    width: 14,
    height: 12,
  },
  mainContainer: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  text4: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
    marginRight: 12,
  },
});
