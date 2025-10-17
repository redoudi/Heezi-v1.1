import { ActionButton } from "@/components/home/action-button";
import { ActiveCourseCard } from "@/components/home/active-course-card";
import { ImageGrid } from "@/components/home/image-grid";
import { StyleSheet, View } from "react-native";

interface LeftColumnProps {
  imageGrid1: string[];
  imageGrid2: string[];
}

const imageGrid1 = [
  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/0bgealkc_expires_30_days.png",
];

export function LeftColumn() {
  return (
    <View style={styles.leftColumn}>
      <ActiveCourseCard />

      <ActionButton
        label="Niveau 1"
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
