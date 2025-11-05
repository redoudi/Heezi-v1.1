import { ActiveCourseCard } from "@/components/home/active-course-card";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SectionsList from "./sections-list";

export function LeftColumn() {
  const [sectionIndex, setSectionIndex] = useState<number>(-1);
  return (
    <View style={styles.leftColumn}>
      <ActiveCourseCard />
      {sectionIndex === -1 && (
        <SectionsList setSectionIndex={setSectionIndex} />
      )}
      {/* <ActionButton
        label="Section 1"
        onPress={() => alert("Pressed!")}
        style={styles.actionButton}
      />

      <MissionDoorGrid style={styles.imageGrid} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  leftColumn: {
    marginTop: 32,
    marginRight: 16,
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
