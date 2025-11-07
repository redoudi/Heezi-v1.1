import { RightColumn } from "@/components/home/right-column";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { ActiveCourseCard } from "@/components/home/active-course-card";
import { useState } from "react";

import { Slot } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LeftColumn />
      <RightColumn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "center",
    marginRight: 32,
    marginTop: 16,
  },
});

function LeftColumn() {
  const [sectionIndex, setSectionIndex] = useState<number>(-1);
  const resetSectionIndex = () => setSectionIndex(-1);

  return (
    <View style={styles2.wrapper}>
      <ScrollView
        style={styles2.leftColumn}
        contentContainerStyle={styles2.contentContainer}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles2.leftColumnContent}>
          <ActiveCourseCard />
          <Slot />
        </View>
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: "stretch",
    marginRight: 16,
  },
  leftColumn: {
    flex: 1,
  },
  leftColumnContent: {
    flex: 1,
    alignSelf: "center",
  },
  contentContainer: {
    paddingTop: 32,
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
});
