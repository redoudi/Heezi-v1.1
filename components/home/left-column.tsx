import { ActiveCourseCard } from "@/components/home/active-course-card";
import { StyleSheet, View } from "react-native";
import SectionsList from "./sections-list";

interface LeftColumnProps {
  imageGrid1: string[];
  imageGrid2: string[];
}

export function LeftColumn() {
  return (
    <View style={styles.leftColumn}>
      <ActiveCourseCard />
      <SectionsList />
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
