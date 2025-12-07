import { isMobile } from "@/utils/isMobile";
import { StyleSheet } from "react-native";
// Base styles for consolidation
const buttonBase = {
  alignItems: "center" as const,
  backgroundColor: "#EFEFEF",
  borderRadius: 8,
  paddingVertical: 8,
};

const buttonBaseWhite = {
  alignItems: "center" as const,
  backgroundColor: "#FFFFFF",
  borderRadius: 8,
};

const imageBaseRounded = {
  borderRadius: 8,
};

export default StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
  },
  section: { paddingHorizontal: 16 },
  sectionContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 10,
    textAlign: "center",
  },
  button11: {
    ...buttonBase,
    marginBottom: 4,
  },
  button12: buttonBase,
  button13: {
    ...buttonBase,
    width: 23,
    marginRight: 10,
  },
  button14: {
    ...buttonBase,
    width: 22,
    marginRight: 10,
  },
  button15: {
    ...buttonBase,
    width: 24,
    marginRight: 10,
  },
  button16: {
    ...buttonBase,
    width: 32,
    marginRight: 10,
  },
  button17: {
    ...buttonBase,
    width: 27,
    marginRight: 11,
  },
  button18: {
    ...buttonBase,
    width: 27,
    marginRight: 21,
  },
  button19: {
    ...buttonBase,
    width: 31,
    marginRight: 10,
  },
  button20: {
    ...buttonBase,
    width: 33,
    paddingVertical: 7,
    marginRight: 10,
  },
  button21: {
    ...buttonBase,
    width: 28,
  },
  button22: {
    ...buttonBase,
    width: 31,
    marginRight: 4,
  },
  button23: {
    ...buttonBase,
    width: 31,
    marginRight: 8,
  },
  button24: {
    ...buttonBase,
    width: 31,
  },
  button25: {
    ...buttonBase,
    width: 30,
    marginRight: 8,
  },
  button26: {
    ...buttonBase,
    width: 29,
    marginRight: 8,
  },
  button27: {
    ...buttonBase,
    width: 31,
    marginRight: 16,
  },
  button28: {
    ...buttonBaseWhite,
    width: 113,
    paddingVertical: 20,
    marginHorizontal: 8,
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
  buttonColumn: {
    ...buttonBase,
    width: 54,
    padding: 8,
    marginRight: 8,
  },
  buttonColumn2: {
    ...buttonBase,
    padding: 8,
  },
  buttonRow: {
    ...buttonBase,
    width: isMobile ? 100 : 241,
    flexDirection: "row",
    marginRight: 10,
  },
  buttonRow2: {
    ...buttonBase,
    width: 73,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginRight: 20,
  },
  buttonRow3: {
    ...buttonBase,
    width: 55,
    flexDirection: "row",
  },

  column4: {
    width: 35,
  },
  column5: {
    width: 399,
    alignItems: "center",
    marginRight: 16,
  },
  column6: {
    marginBottom: 16,
  },
  column7: {
    width: 293,
    alignItems: "center",
    marginRight: 17,
  },
  column8: {
    marginBottom: 9,
  },
  column9: {
    width: 293,
    alignItems: "center",
    marginRight: 7,
  },
  image10: {
    ...imageBaseRounded,
    width: 19,
    height: 23,
  },
  image11: {
    ...imageBaseRounded,
    width: 18,
    height: 18,
  },
  image12: {
    ...imageBaseRounded,
    width: 9,
    height: 6,
    marginRight: 8,
  },
  image13: {
    ...imageBaseRounded,
    width: 7,
    height: 10,
  },
  image14: {
    ...imageBaseRounded,
    width: 6,
    height: 10,
  },
  image15: {
    ...imageBaseRounded,
    width: 8,
    height: 10,
  },
  image16: {
    ...imageBaseRounded,
    width: 16,
    height: 10,
  },
  image17: {
    ...imageBaseRounded,
    width: 11,
    height: 9,
  },
  image18: {
    ...imageBaseRounded,
    width: 15,
    height: 13,
  },
  image19: {
    ...imageBaseRounded,
    width: 12,
    height: 14,
  },
  image20: {
    width: 44,
    height: 28,
    marginRight: 4,
  },
  image21: {
    width: 44,
    height: 28,
    marginRight: 8,
  },
  image22: {
    ...imageBaseRounded,
    width: 15,
    height: 12,
  },
  image23: {
    ...imageBaseRounded,
    width: 15,
    height: 17,
  },
  image24: {
    ...imageBaseRounded,
    width: 15,
    height: 14,
  },
  image25: {
    ...imageBaseRounded,
    width: 14,
    height: 12,
  },
  image26: {
    ...imageBaseRounded,
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
    ...imageBaseRounded,
    width: 31,
    height: 31,
    marginBottom: 4,
  },
  image6: {
    ...imageBaseRounded,
    width: 17,
    height: 16,
  },
  iconBig: {
    ...imageBaseRounded,
    width: 26,
    height: 31,
  },
  downArrow: {
    ...imageBaseRounded,
    width: 9,
    height: 6,
  },
  row10: {
    flexDirection: "row",
    marginBottom: 10,
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

  row6: {
    flexDirection: "row",
    marginBottom: 4,
  },
  row7: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  row9: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text10: {
    fontSize: 6,
    color: "#000000",
    marginBottom: 4,
  },
  text: {
    fontSize: 10,
  },

  text4: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
    flex: 1,
  },
  text5: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
  },
  text6: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
    marginRight: 11,
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
    marginRight: 215,
  },
});
