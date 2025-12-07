import VerticalDivider from "@/components/practice-tools/VerticalDivider";
import styles from "@/components/practice-tools/ribbons/RibbonStyles";
import { useSpreadsheetRibbon } from "@/hooks/useSpreadsheet";
import { isMobile } from "@/utils/isMobile";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SectionPressePapiers from "../../ribbons/SectionPressePapiers";
import BoldButton from "../BoldButton";
import MobileRibbon from "../RibbonMobile";

export default function SpreadsheetRibbon() {
  return isMobile ? <MobileRibbon /> : <SpreadsheetRibbonDesktop />;
}

function SectionPolice() {
  const { isSelectedCellBold, boldSelectedCell } = useSpreadsheetRibbon();
  return (
    <View style={styles.section}>
      <View style={styles.sectionGrid}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.buttonDropdown}
            onPress={() => {}}
            disabled
          >
            <Text style={styles2.text4}>{"Police"}</Text>
            <Image
              source={require("@/assets/images/downArrow.png")}
              resizeMode={"contain"}
              style={styles2.image12}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDropdown}
            onPress={() => {}}
            disabled
          >
            <Text style={styles2.text5}>{"12"}</Text>
            <Image
              source={require("@/assets/images/downArrow.png")}
              resizeMode={"contain"}
              style={styles.downArrow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles2.row7}>
          <BoldButton isBold={isSelectedCellBold} onPress={boldSelectedCell} />
          <TouchableOpacity
            style={styles2.button14}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/wbsdd6yd_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image14}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button15}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/shmc35k2_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button16}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/7czrdf4k_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image16}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button17}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/ath16u4f_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image17}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button18}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/uewh91sl_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image18}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles2.text6}>{"Police"}</Text>
    </View>
  );
}

function SpreadsheetRibbonDesktop() {
  return (
    <View style={styles.mainContainer}>
      <SectionPressePapiers />
      <VerticalDivider />
      <SectionPolice />
      <VerticalDivider />
      <View style={styles2.column7}>
        <View style={styles2.row8}>
          <TouchableOpacity
            style={styles2.button19}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/nkzp2nt3_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image19}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button19}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/y7bq5psu_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image19}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button20}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/gxdqlt2g_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image19}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button21}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/mc2ln7j3_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles2.row9}>
          <TouchableOpacity
            style={styles2.button22}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/uirt4emu_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image21}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button20}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/393nlgpw_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image19}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button23}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/e7u96dzs_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image21}
            />
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/spreadsheetRibbonAlignment.png")}
            resizeMode={"contain"}
            style={styles2.image22}
          />
          <TouchableOpacity
            style={styles2.button24}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/h7fhqw57_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button25}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/lxt8yo0p_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles2.view}>
          <Text style={styles2.text6}>{"Paragraphe"}</Text>
        </View>
      </View>
      <VerticalDivider />
      <View style={styles2.column8}>
        <TouchableOpacity
          style={styles2.buttonRow3}
          onPress={() => {}}
          disabled
        >
          <Text style={styles2.text4}>{"Standard"}</Text>
          <Image
            source={require("@/assets/images/f0blr7yj_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles2.image23}
          />
        </TouchableOpacity>
        <View style={styles2.row10}>
          <Image
            source={require("@/assets/images/spreadsheetRibbon2.png")}
            resizeMode={"contain"}
            style={styles2.image24}
          />
          <TouchableOpacity
            style={styles2.button26}
            onPress={() => {}}
            disabled
          >
            <Text style={styles2.text7}>{"%"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles2.button27}
            onPress={() => {}}
            disabled
          >
            <Text style={styles2.text7}>{"000"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles2.text3}>{"Nombre"}</Text>
      </View>
      <VerticalDivider />
      <View style={styles2.column9}>
        <View style={styles2.row11}>
          <Image
            source={require("@/assets/images/spreadsheetRibbon3.png")}
            resizeMode={"contain"}
            style={styles2.image25}
          />
          <Image
            source={require("@/assets/images/spreadsheetRibbon4.png")}
            resizeMode={"contain"}
            style={styles2.image26}
          />
        </View>
        <Image
          source={require("@/assets/images/spreadsheetRibbon5.png")}
          resizeMode={"contain"}
          style={styles2.image27}
        />
        <Text style={styles2.text3}>{"Styles"}</Text>
      </View>
      <VerticalDivider />
      <View style={styles2.column10}>
        <View style={styles2.column11}>
          <View style={styles2.row12}>
            <TouchableOpacity
              style={styles2.buttonRow4}
              onPress={() => {}}
              disabled
            >
              <Image
                source={require("@/assets/images/6p0qmdld_expires_30_days.png")}
                resizeMode={"contain"}
                style={styles2.image28}
              />
              <Text style={styles2.text7}>{"Insérer"}</Text>
              <Image
                source={require("@/assets/images/bm26nyo6_expires_30_days.png")}
                resizeMode={"contain"}
                style={styles2.image29}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles2.buttonRow5}
              onPress={() => {}}
              disabled
            >
              <Image
                source={require("@/assets/images/3psjry5g_expires_30_days.png")}
                resizeMode={"contain"}
                style={styles2.image28}
              />
              <Text style={styles2.text7}>{"Supprimer"}</Text>
              <Image
                source={require("@/assets/images/ihd2alr2_expires_30_days.png")}
                resizeMode={"contain"}
                style={styles2.image23}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles2.buttonRow6}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/ueuz0btu_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image30}
            />
            <Text style={styles2.text8}>{"Format"}</Text>
            <Image
              source={require("@/assets/images/x88mmd51_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles2.image29}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles2.text6}>{"Cellules"}</Text>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  button11: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 4,
  },
  button12: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button13: {
    width: 23,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
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
  button16: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 7,
    marginRight: 10,
  },
  button17: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  button18: {
    width: 28,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
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
  button21: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
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
  button26: {
    width: 26,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 8,
  },
  button27: {
    width: 44,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  buttonColumn: {
    width: 54,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  buttonRow: {
    width: 72,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  buttonRow2: {
    width: 73,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 10,
  },
  buttonRow3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buttonRow4: {
    width: 92,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 9,
  },
  buttonRow5: {
    width: 114,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  buttonRow6: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  column3: {
    width: 97,
    marginLeft: 32,
    marginRight: 16,
  },
  column4: {
    width: 35,
  },
  column5: {
    width: 229,
    alignItems: "center",
    marginRight: 16,
  },
  column6: {
    marginBottom: 16,
  },
  column7: {
    width: 244,
    marginRight: 16,
  },
  column8: {
    width: 133,
    marginRight: 16,
  },
  column9: {
    width: 99,
    marginRight: 16,
  },
  column10: {
    width: 216,
    alignItems: "center",
    marginRight: 309,
  },
  column11: {
    marginBottom: 11,
  },
  image8: {
    borderRadius: 8,
    width: 26,
    height: 31,
    marginBottom: 4,
  },
  image9: {
    borderRadius: 8,
    width: 9,
    height: 6,
  },
  image10: {
    borderRadius: 8,
    width: 19,
    height: 23,
  },
  image11: {
    borderRadius: 8,
    width: 18,
    height: 18,
  },
  image12: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 8,
  },
  image13: {
    borderRadius: 8,
    width: 7,
    height: 10,
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
  image16: {
    borderRadius: 8,
    width: 16,
    height: 16,
  },
  image17: {
    borderRadius: 8,
    width: 16,
    height: 14,
  },
  image18: {
    borderRadius: 8,
    width: 12,
    height: 14,
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
  image22: {
    width: 45,
    height: 32,
    marginRight: 7,
  },
  image23: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 7,
  },
  image24: {
    width: 46,
    height: 30,
    marginRight: 7,
  },
  image25: {
    width: 45,
    height: 32,
    marginRight: 8,
  },
  image26: {
    width: 44,
    height: 31,
  },
  image27: {
    width: 44,
    height: 31,
    marginBottom: 9,
  },
  image28: {
    borderRadius: 8,
    width: 15,
    height: 15,
    marginLeft: 8,
  },
  image29: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 6,
  },
  image30: {
    borderRadius: 8,
    width: 15,
    height: 15,
    marginLeft: 8,
    marginRight: 4,
  },
  mainContainer: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    flexWrap: "wrap",
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  row6: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 4,
  },
  row7: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
  },
  row8: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 8,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  row10: {
    flexDirection: "row",
    marginBottom: 10,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  row12: {
    flexDirection: "row",
    marginBottom: 8,
  },
  text2: {
    fontSize: 10,
    color: "#292929",
    marginBottom: 4,
  },
  text3: {
    fontSize: 10,
    color: "#000000",
    textAlign: "center",
  },
  text4: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
    marginRight: 12,
  },
  text5: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
  },
  text6: {
    fontSize: 10,
    color: "#000000",
  },
  text7: {
    fontSize: 10,
    color: "#292929",
  },
  text8: {
    fontSize: 10,
    color: "#292929",
    marginRight: 6,
  },
  view: {
    alignItems: "center",
  },
});
