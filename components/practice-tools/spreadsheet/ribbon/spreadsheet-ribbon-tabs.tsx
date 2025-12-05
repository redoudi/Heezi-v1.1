import { isMobile } from "@/utils/isMobile";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const darkBgStyle = { backgroundColor: "#989898" };
const RIBBON_TABS = [{ label: "Accueil" }, { label: "Insertion" }];
const RIBBON_TABS_DESKTOP = [
  { label: "Dessin", style: darkBgStyle },
  { label: "Conception", style: darkBgStyle },
  { label: "Mise en page" },
  { label: "Références" },
  { label: "Publipostage", style: darkBgStyle },
  { label: "Révision" },
  { label: "Affichage", style: darkBgStyle },
];

if (!isMobile) {
  RIBBON_TABS.push(...RIBBON_TABS_DESKTOP);
}

export default function RibbonTabs() {
  return (
    <View style={styles.row2}>
      <View style={styles.ribbonTabsContainer}>
        {RIBBON_TABS.map(({ label, style }) => (
          <TouchableOpacity
            key={label}
            style={[styles.button2, style]}
            onPress={() => {}}
            disabled
          >
            <Text style={styles.text}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row3}>
        <TouchableOpacity style={styles.button9} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/86rkedvc_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image6}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button10} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/zromobil_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image6}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 11,
  },
  row3: {
    width: 73,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 33,
  },
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "#292929",
  },
  button2: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
  },

  button9: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button10: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  image6: {
    borderRadius: 8,
    width: 16,
    height: 16,
  },

  ribbonTabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 32,
    marginRight: 64,
    gap: 8,
  },
});
