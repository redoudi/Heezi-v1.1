import { ActionButton } from "@/components/home/action-button";
import { CategoryCard } from "@/components/home/category-card";
import { CourseCard } from "@/components/home/course-card";
import { ImageGrid } from "@/components/home/image-grid";
import { LevelSection } from "@/components/home/level-section";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const menuItems = [
    {
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/kxrsaswj_expires_30_days.png",
      label: "Jouer",
    },
    {
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/u14kpgxz_expires_30_days.png",
      label: "Profil",
    },
    {
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/1b0ke18y_expires_30_days.png",
      label: "Score",
    },
  ];

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
              <View style={styles.leftColumn}>
                <CourseCard
                  thumbnailUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ldtg9pud_expires_30_days.png"
                  progress="6 Sections/10 niveaux"
                  status="En cours"
                  title="Gestion d'un tableur"
                  description="Lörem ipsum sulingar sasade, om än säv. "
                  onPress={() => alert("Pressed!")}
                />

                <ActionButton
                  label="Lörem ipsum sulingar sasade, om än säv. "
                  onPress={() => alert("Pressed!")}
                  style={styles.actionButton}
                />

                <ImageGrid imageUris={imageGrid1} style={styles.imageGrid} />

                <ImageGrid imageUris={imageGrid2} style={styles.imageGrid2} />

                <ActionButton
                  label="Lörem ipsum sulingar sasade, om än säv. "
                  onPress={() => alert("Pressed!")}
                />
              </View>

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
  sidebar: {
    width: 193,
    alignItems: "center",
    marginTop: 32,
    marginLeft: 31,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "yellow",
  },
  logo: {
    width: 191,
    height: 69,
    marginBottom: 32,
  },
  menuContainer: {
    paddingVertical: 8,
  },
  menuIcon: {
    borderRadius: 8,
    width: 48,
    height: 48,
    marginRight: 16,
  },
  menuText: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
  lastMenuItem: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 7,
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
  categoryList: {
    backgroundColor: "#FFFFFF",
  },
  actionButton: {
    marginBottom: 16,
  },
  imageGrid: {
    marginBottom: 8,
  },
  imageGrid2: {
    marginBottom: 16,
  },
  imageGrid3: {
    marginBottom: 8,
  },
});
