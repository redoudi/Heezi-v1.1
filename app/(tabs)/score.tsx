import WatermarkAbsolute from "@/components/ui/watermark";
import { isMobile } from "@/utils/isMobile";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HeaderSection() {
  return (
    <View style={styles.tropheebanner}>
      <View style={styles.tropheeRow}>
        <Image
          source={require("@/assets/images/Bronze.png")}
          resizeMode={"stretch"}
          style={styles.trophee1}
        />
        <Image
          source={require("@/assets/images/Argent.png")}
          resizeMode={"stretch"}
          style={styles.trophee2}
        />
        <Image
          source={require("@/assets/images/Or.png")}
          resizeMode={"stretch"}
          style={styles.trophee2}
        />
        <Image
          source={require("@/assets/images/Diamant.png")}
          resizeMode={"stretch"}
          style={styles.trophee3}
        />
      </View>
      <View style={styles.rankBanner}>
        <Text style={styles.bronzeText}>{"Bronze"}</Text>
        <Text style={styles.rankIndication}>
          {
            "Les participants dans le top 10 se verront attribuer un nouveau rang "
          }
        </Text>
        <Text style={styles.daysLeft}>{"7 jours restants"}</Text>
      </View>
    </View>
  );
}

function RankingListSection() {
  return (
    <View style={styles.rankingList}>
      <View style={styles.rankeeRow}>
        <TouchableOpacity style={styles.button} onPress={() => {}} disabled>
          <Text style={styles.text4}>{"Classement Global"}</Text>
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text5}>{"Classement de votre session"}</Text>
        </View>
      </View>

      {[...Array(7)].map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.buttonRow, index === 1 && styles.youRankedRow]}
          onPress={() => {}}
          disabled
        >
          <Text style={styles.rankNumber}>{`${index + 1}.`}</Text>
          <Image
            source={require("@/assets/images/Coq.png")}
            resizeMode={"stretch"}
            style={styles.image4}
          />
          <Text style={styles.text7}>
            {index === 1 ? "Vous" : "Autre joueur"}
          </Text>
          <Text style={styles.text8}>{"Nv. ?"}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function ScoreScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.mainContainerContent}
      >
        <HeaderSection />
        <View style={styles.bodySection}>
          <RankingListSection />
          <Image
            source={require("@/assets/images/ScoreIcon.png")}
            resizeMode={"contain"}
            style={styles.scoreIcon}
          />
        </View>

        <WatermarkAbsolute text="BIENTÔT DISPONIBLE" />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  scrollview: {},
  mainContainerContent: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  mainContent: {},
  box: {
    height: 686,
    backgroundColor: "#000000",
  },
  box2: {
    width: 518,
    height: 687,
    backgroundColor: "#000000",
    marginLeft: 34,
  },
  button: {
    width: 240,
    alignItems: "center",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 24,
    marginLeft: 16,
    marginRight: 8,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  buttonRow2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  buttonRow3: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
  },
  column: {
    margin: 32,
  },
  tropheebanner: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  rankBanner: {
    alignItems: "center",
    paddingHorizontal: 305,
    marginHorizontal: 16,
  },
  rankingList: {
    width: 552,
    marginRight: 16,
  },
  column5: {
    width: 552,
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    paddingBottom: 1,
  },
  trophee1: {
    borderRadius: 8,
    width: 68,
    height: 68,
    marginLeft: 511,
    marginRight: 8,
  },
  trophee2: {
    borderRadius: 8,
    width: 36,
    height: 36,
    marginRight: 8,
  },
  trophee3: {
    borderRadius: 8,
    width: 36,
    height: 36,
    marginRight: 376,
  },
  image4: {
    borderRadius: 8,
    width: 40,
    height: 40,
    marginRight: 16,
  },
  scoreIcon: {
    flex: 1,
    marginTop: 24,
    marginLeft: 34,
    alignSelf: isMobile ? "center" : undefined,
  },
  tropheeRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 37,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  bodySection: {
    flexDirection: !isMobile ? "row" : "column-reverse",
  },
  rankeeRow: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  bronzeText: {
    fontSize: 22,
    color: "#292929",
    marginBottom: 8,
    fontWeight: "bold",
  },
  rankIndication: {
    fontSize: 16,
    lineHeight: 24,
    color: "#292929",
    marginBottom: 8,
  },
  daysLeft: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
  text4: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
  },
  text5: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginLeft: 16,
    width: 224,
  },
  rankNumber: {
    fontSize: 22,
    color: "#292929",
    marginLeft: 16,
    marginRight: 20,
  },
  text7: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#292929",
    flex: 1,
  },
  text8: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    marginRight: 20,
  },
  text9: {
    fontSize: 22,
    color: "#1B463E",
    marginLeft: 16,
    marginRight: 20,
  },
  text10: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1B463E",
    flex: 1,
  },
  text11: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B463E",
    marginRight: 20,
  },

  view2: {
    width: 272,
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 16,
  },
  youRankedRow: {
    backgroundColor: "#72D6BA",
  },
});
