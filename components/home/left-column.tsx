import { ActionButton } from "@/components/home/action-button";
import { ActiveCourseCard } from "@/components/home/active-course-card";
import { MissionDoorGrid } from "@/components/home/missionDoorGrid";
import { StyleSheet, View } from "react-native";

interface LeftColumnProps {
  imageGrid1: string[];
  imageGrid2: string[];
}

export function LeftColumn() {
  return (
    <View style={styles.leftColumn}>
      <ActiveCourseCard />

      <ActionButton
        label="Section 1"
        onPress={() => alert("Pressed!")}
        style={styles.actionButton}
      />

      <MissionDoorGrid style={styles.imageGrid} />
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
