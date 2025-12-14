import { ScrollableScreen } from "@/components/scrollable-screen";
import WatermarkAbsolute from "@/components/ui/watermark";
import { isMobile } from "@/utils/isMobile";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilScreen() {
  return (
    <ScrollableScreen contentContainerStyle={styles.mainContainer}>
      <View style={styles.mainContent}>
        <View style={styles.headerRow}>
          <View style={styles.levelAndProgress}>
            <Text style={styles.text}>{"Niveau. 1"}</Text>
            <View style={styles.progressBar}></View>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => {}} disabled>
            <Image
              source={require("@/assets/images/profiladd.png")}
              resizeMode={"contain"}
              style={styles.addIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => {}} disabled>
            <Image
              source={require("@/assets/images/profilSettings.png")}
              resizeMode={"stretch"}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image
            source={require("@/assets/images/ProfilMascot.png")}
            resizeMode={"contain"}
            style={styles.mascotImage}
          />
          <View style={styles.statsContainer}>
            <Text style={styles.profileNameText}>{"Nom du profil"}</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.text}>{"0/6 succès débloqués (0%)"}</Text>
              <View style={styles.progressBar}></View>
            </View>
            <View style={styles.progressContainer}>
              <Text style={styles.text}>{"Progression dans le jeu (0%)"}</Text>
              <View style={styles.progressBar}></View>
            </View>
            <View style={styles.rankContainer}>
              <Image
                source={require("@/assets/images/Rank.png")}
                resizeMode={"stretch"}
                style={styles.rankIcon}
              />
              <View style={styles.rankTextContainer}>
                <Text style={styles.rankText}>{"Rang bronze"}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <WatermarkAbsolute text="BIENTÔT DISPONIBLE" />
    </ScrollableScreen>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#33C6FD",
    marginHorizontal: 16,
  },
  button: {
    width: 97,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 18,
    marginRight: 9,
  },
  button2: {
    width: 67,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 18,
  },
  mainContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 32,
    paddingBottom: 32,
    marginHorizontal: 32,
    shadowColor: "#249079",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  levelAndProgress: {
    width: 866,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginRight: 16,
  },
  statsContainer: {
    width: 520,
  },
  progressContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  addIcon: {
    borderRadius: 8,
    width: 65,
    height: 36,
  },
  settingsIcon: {
    borderRadius: 8,
    width: 36,
    height: 36,
  },
  mascotImage: {
    width: 520,
    height: 306,
    marginRight: 16,
  },
  rankIcon: {
    borderRadius: 8,
    width: 41,
    height: 51,
    marginHorizontal: 16,
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: 32,
    marginHorizontal: 32,
  },
  headerButtonsRow: {
    width: 173,
    flexDirection: "row",
  },
  body: {
    flexDirection: !isMobile ? "row" : "column",
    marginHorizontal: 32,
    alignItems: isMobile ? "center" : undefined,
  },
  rankContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FDEFC8",
    borderRadius: 8,
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    marginBottom: 8,
    marginLeft: 16,
  },
  profileNameText: {
    fontSize: 22,
    color: "#0A2924",
    marginBottom: 16,
  },
  rankText: {
    fontSize: 22,
    color: "#B2460B",
  },

  rankTextContainer: {
    width: 162,
    alignItems: "center",
  },
});
