import { ActionButton } from "@/components/home/action-button";
import { ActiveCourseCard } from "@/components/home/active-course-card";
import { ImageGrid } from "@/components/home/image-grid";
import { StyleSheet, View } from "react-native";

interface LeftColumnProps {
  imageGrid1: string[];
  imageGrid2: string[];
}

export function LeftColumn({ imageGrid1, imageGrid2 }: LeftColumnProps) {
  return (
    <View style={styles.leftColumn}>
      <ActiveCourseCard />

      <ActionButton
        label="Lörem ipsum sulingar sasade, om än säv. "
        onPress={() => alert("Pressed!")}
        style={styles.actionButton}
      />

      <ImageGrid imageUris={imageGrid1} style={styles.imageGrid} />
    </View>
  );
}

const styles = StyleSheet.create({
  leftColumn: {
    width: 742,
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
