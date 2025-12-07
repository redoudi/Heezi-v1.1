import { isMobile } from "@/utils/isMobile";
import { StyleSheet } from "react-native";
// Base styles for consolidation
const buttonBase = {
  alignItems: "center" as const,
  backgroundColor: "#EFEFEF",
  borderRadius: 8,
  padding: 4,
};

const buttonBaseWhite = {
  alignItems: "center" as const,
  backgroundColor: "#FFFFFF",
  borderRadius: 8,
};

const imageBaseRounded = {};

export default StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  section: { paddingHorizontal: 16 },
  sectionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionGrid: { gap: 8 },
  sectionTitle: {
    fontSize: 10,
    textAlign: "center",
  },
  button: {
    alignItems: "center" as const,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 4,
  },
  button11: {
    ...buttonBase,
  },
  button12: buttonBase,
  button13: {
    ...buttonBase,
    width: 23,
  },
  button14: {
    ...buttonBase,
    width: 22,
  },
  button15: {
    ...buttonBase,
    width: 24,
  },
  button16: {
    ...buttonBase,
    width: 32,
  },
  button17: {
    ...buttonBase,
    width: 27,
  },
  button18: {
    ...buttonBase,
    width: 27,
  },
  button19: {
    ...buttonBase,
    width: 31,
  },
  button20: {
    ...buttonBase,
    width: 33,
    paddingVertical: 7,
  },
  button21: {
    ...buttonBase,
    width: 28,
  },
  button22: {
    ...buttonBase,
    width: 31,
  },
  button23: {
    ...buttonBase,
    width: 31,
  },
  button24: {
    ...buttonBase,
    width: 31,
  },
  button25: {
    ...buttonBase,
    width: 30,
  },
  button26: {
    ...buttonBase,
    width: 29,
  },
  button27: {
    ...buttonBase,
    width: 31,
  },
  button28: {
    ...buttonBaseWhite,
    width: 113,
    paddingVertical: 20,
  },
  button29: {
    ...buttonBaseWhite,
    width: 113,
    paddingVertical: 17,
  },
  button30: {
    ...buttonBaseWhite,
    width: 43,
    borderColor: "#000000",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    paddingVertical: 27,
  },
  verticalButton: {
    ...buttonBase,
    width: 54,
    padding: 8,
  },
  buttonColumn2: {
    ...buttonBase,
    padding: 8,
  },
  buttonRow: {
    ...buttonBase,
    width: isMobile ? 100 : 241,
    flexDirection: "row",
  },
  buttonRow2: {
    ...buttonBase,
    width: 73,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  buttonRow3: {
    ...buttonBase,
    width: 55,
    flexDirection: "row",
  },

  buttonColumn: { gap: 4 },
  column5: {
    width: 399,
    alignItems: "center",
  },
  column7: {
    width: 293,
    alignItems: "center",
  },
  column8: {},
  column9: {
    width: 293,
    alignItems: "center",
  },
  iconMd: {
    width: 18,
    height: 18,
  },

  image12: {
    width: 9,
    height: 6,
  },
  image13: {
    width: 7,
    height: 10,
  },
  image14: {
    width: 6,
    height: 10,
  },
  image15: {
    width: 8,
    height: 10,
  },
  image16: {
    width: 16,
    height: 10,
  },
  image17: {
    width: 11,
    height: 9,
  },
  image18: {
    width: 15,
    height: 13,
  },
  image19: {
    width: 12,
    height: 14,
  },
  image20: {
    width: 44,
    height: 28,
  },
  image21: {
    width: 44,
    height: 28,
  },
  image22: {
    width: 15,
    height: 12,
  },
  image23: {
    width: 15,
    height: 17,
  },
  image24: {
    width: 15,
    height: 14,
  },
  image25: {
    width: 14,
    height: 12,
  },
  image26: {
    width: 13,
    height: 12,
  },
  image27: {
    width: 49,
    height: 31,
  },
  image28: {
    width: 27,
    height: 15,
  },
  image29: {
    width: 31,
    height: 31,
  },
  image6: {
    width: 17,
    height: 16,
  },
  iconBig: {
    width: 26,
    height: 31,
  },
  downArrow: {
    width: 9,
    height: 6,
  },
  row10: {
    flexDirection: "row",
  },
  row11: {
    borderWidth: 1,
    borderRightWidth: 0,
    width: 242,
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingVertical: 8,
  },

  buttonsRow: {
    flexDirection: "row",
    gap: 8,
  },
  row7: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
  },
  row9: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text10: {
    fontSize: 6,
    color: "#000000",
  },
  text: {
    fontSize: 10,
  },

  text4: {
    fontSize: 10,
    color: "#292929",

    flex: 1,
  },
  text5: {
    fontSize: 10,
    color: "#292929",
  },
  text6: {
    fontSize: 10,
    color: "#292929",
  },
  text7: {
    fontSize: 10,
    color: "#000000",
  },
  text8: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  text9: {
    fontSize: 14,
    color: "#000000",
  },
  view: {
    width: 54,
  },
});
