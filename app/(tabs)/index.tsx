import { CategoryCard } from "@/components/home/category-card";
import { ImageGrid } from "@/components/home/image-grid";
import { LeftColumn } from "@/components/home/left-column";
import { LevelSection } from "@/components/home/level-section";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const imageGrid1 = [
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/3nk7hv2d_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/m5dlwmll_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/4ldezjzz_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/0bgealkc_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/iioau6j4_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qfqqlz8k_expires_30_days.png",
  ];

  const imageGrid2 = [
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wbdvrzse_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/otntrlzv_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/u1j3b1c7_expires_30_days.png",
  ];

  const imageGrid3 = [
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/vnwq6xma_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/6f2rjpbw_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/drtibfq1_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zgmp5kfw_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/fjhb9y8c_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/3z5eq6qe_expires_30_days.png",
  ];

  const imageGrid4 = [
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/4pqx9q5x_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/7cy4wc15_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ro7jb80m_expires_30_days.png",
  ];

  const categories = [
    {
      title: "Gestion d'un tableur",
      backgroundColor: "#72D6BA",
      textColor: "#0A2924",
    },
    {
      title: "Edition de texte",
      backgroundColor: "#33C6FD",
      textColor: "#0A4F70",
    },
    {
      title: "Lorem ipsum",
      backgroundColor: "#A085CD",
      textColor: "#573D75",
    },
    {
      title: "Lorem ipsum",
      backgroundColor: "#F9BE3C",
      textColor: "#772D10",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.row}>
          {/* Main Content */}
          <View style={styles.mainContent}>
            <View style={styles.contentRow}>
              {/* Left Column */}
              <LeftColumn imageGrid1={imageGrid1} imageGrid2={imageGrid2} />

              {/* Right Column */}
              <View style={styles.rightColumn}>
                <LevelSection
                  level="Niveau. 1"
                  score="500"
                  coinIconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/c30140rw_expires_30_days.png"
                  badgeIconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/a8a1zbel_expires_30_days.png"
                  onScorePress={() => alert("Pressed!")}
                />

                <View style={styles.categoryList}>
                  {categories.map((category, index) => (
                    <CategoryCard
                      key={index}
                      title={category.title}
                      backgroundColor={category.backgroundColor}
                      textColor={category.textColor}
                    />
                  ))}
                </View>
              </View>
            </View>

            <ImageGrid imageUris={imageGrid3} style={styles.imageGrid3} />
            <ImageGrid imageUris={imageGrid4} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  view: {
    width: 1440,
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContent: {
    width: 1121,
    marginRight: 32,
  },
  contentRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  leftColumn: {
    width: 742,
    marginTop: 32,
    marginRight: 16,
  },
  rightColumn: {
    width: 363,
    backgroundColor: "#FFFFFF",
  },
  // leftColumn styles moved to LeftColumn component
  categoryList: {
    backgroundColor: "#FFFFFF",
  },
  imageGrid3: {
    marginBottom: 8,
  },
});
