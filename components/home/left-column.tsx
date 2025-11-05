import { ActiveCourseCard } from "@/components/home/active-course-card";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SectionScreen from "./section-screen";
import SectionsList from "./sections-list";

export function LeftColumn() {
  const [sectionIndex, setSectionIndex] = useState<number>(-1);
  const resetSectionIndex = () => setSectionIndex(-1);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.leftColumn}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.leftColumnContent}>
          <ActiveCourseCard />
          {sectionIndex === -1 ? (
            <SectionsList setSectionIndex={setSectionIndex} />
          ) : (
            <SectionScreen resetSectionIndex={resetSectionIndex} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
